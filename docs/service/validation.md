---
sidebar_position: 3
---

# Aspor Validation

* [Installation](#installation)
* [Model Validation](#model-validation)
* [Rule Validation](#rule-validation)


## Installation
```
Install-Package Aspor.Validation
```

## Model Validation
The model validation will check if the properties of an object have the right value and fits into the schema.

### Validation action
Aspor model validation differentiate between different validation action. Based on the executed action the validation
will behave differently. 

| Action          | Http Method  | Description
| ------------- |:------------:| :-------------:|
| CREATE        | POST         | Used when a new object is created with initial properties. |
| UPDATE        | PATCH        | Used when an object is updated and some properties changes (supported with delta operation) |
| REPLACE       | PUT          | Used when an object is overridden (supported with delta operation) |
| DELETE        | DELETE       | Used when an object is deleted |

### OData Delta validation

Aspor supported the [OData Delta class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.odata.deltas.delta?view=odata-aspnetcore-8.0) 
and will only validate the changed properties. So for instance, if you use the `[Required]` annotation for a field 
which has not been changed, it will not have an impact on your validation result. Also allows the delta together with the 
validation actions to exactly calculate if it is allowed to modify a certain field.


### System Data Annotations
https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-5.0

### Aspor Annotations

Aspor brings additional annotations to the already available system data annotations. 

| Annotation            | Parameters              | Description
| -------------         |:------------:           | :-------------:|
| OnlyServer            |                         | Allows only the server to modify a certain property |
| DisallowModification  |                         | Disallows the modification of a certain property |
| AllowOnly             | Action#ValidationAction | Allows only one validation action on a certain property (e.g. CREATE OR UPDATE) |

### Example


```csharp
[Table("projects")]
public class Project
{

    [Key]
    [OnlyServer]
    public Guid Id { get; set; }

    [OnlyServer]
    public Guid WorkspaceId { get; set; }

    [MinLength(4)]
    [MaxLength(128)]
    [Required]
    public string Name { get; set; }

    [MinLength(4)]
    [MaxLength(128)]
    [Required]
    public string Discriminator { get; set; }

    public bool Public { get; set; }

    [InverseProperty("Project")]
    public virtual IList<Board> Boards { get; set; }
        
}
```

### Custom model validator annotation


## Rule Validation

Rule validations allow to further improve model validation with domain specific checks. 
The main different is, that the model validation can only be called when the entire object has been loaded or after 
the object has been patched by an update request. During the validation the `IServiceProvider` is also available, 
which allows you direct access to your database or other services (sync or async).

The rule validation can be integrated into your object by implementing the `IRuleValidation` for synchronous validation 
and the `IAsyncRuleValidation` for asynchronous validation.

## Example

We will extend our current project model with a custom rule validation that will prevent multiple 
projects with the same discriminator in a workspace. If already another project with the new discriminator is available, 
our validation will fail.

```csharp
[Table("projects")]
public class Project : IAsyncRuleValidation
{

    [Key]
    [OnlyServer]
    public Guid Id { get; set; }

    [OnlyServer]
    public Guid WorkspaceId { get; set; }

    [MinLength(4)]
    [MaxLength(128)]
    [Required]
    public string Name { get; set; }

    [MinLength(4)]
    [MaxLength(128)]
    [Required]
    public string Discriminator { get; set; }

    public bool Public { get; set; }

    [InverseProperty("Project")]
    public virtual IList<Board> Boards { get; set; }

    public async Task Validate(IServiceProvider services, ModelStateDictionary state, object instance)
    {
        //Aquire a new database context
        DatabaseContext database = services.GetRequiredService<DatabaseContext>();
        
        //Check if there is already another project with the same discriminator in the same workspace 
        //(make sure to exclude the current object from the check)
        if (await database.Projects.Where(p => p.Id != Id && p.WorkspaceId == WorkspaceId && p.Discriminator == Discriminator).AnyAsync()) 
        {
            //Throw a model validation error
            state.AddModelError("discriminator", "Project discriminator must be unique in a workspace");
        }
    }
    
}
```
