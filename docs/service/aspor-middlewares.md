---
sidebar_position: 2
---

# Aspor Middlewares

Aspor brings different middlewares which will extend your OData api with different functionalities.
The middlewares are located in different packages, see [here](getting-started.md#installation) to get more information about the installation.

* [Automatic pre validation checks](#automatic-pre-validation-checks)
* [OData page sizing](#odata-page-sizing)
* [OData return preference](#odata-return-preference)
* [OData ETag auto matching](#odata-etag-auto-matching)
* [OData export](#odata-export)


### Automatic pre validation checks

This simple middleware will add model validation checks and return a `400 (bad request)` if the validation fails
and will prevent the controller action to get executed. You can read more about the validation [here](validation.md)

```csharp
.AddControllers().AddAutoPreValidationCheck()
```

:::note
The pre validation middleware will not execute rule validations because the object is not fully available at this time.
:::

### OData page sizing

The OData page sizing middleware brings a default result size to all your `[EnableQuery]` functions.
If no page size has been defined, the default configured amount will be used.

```csharp
//Defualt amount will be set to 1000
.AddControllers().AddAsporODataPageSize()

//Custom default amount
.AddControllers().AddAsporODataPageSize(2000)
```

### OData return preference

The OData return preference middleware will allow you to define the `Prefer` header to control how objects are return
for `PATCH`, `PUT` and `DELETE` requests. This will reduce bandwidth if used correctly.

`return=minimal` <br />
The minimal return preference value will return a `204 (no content)` response to indicate the response 
succeeded but will not return the changed object. This return preference should be used when you want to change an object 
but do not need the return of the changed object (e.g. because they are already available on the client).

`return=representation` <br />
The representation will return a `200 (ok)` response including the representation of the changed object
with all properties.

Using the right return preferences can drastic reduce bandwidth which is specially important 
on mobile devices.

```csharp
//The minimal return preference is used if no header is defined
.AddControllers().AddAsporReturnPreference()

//Change the default return preference if no header is defined
.AddControllers().AddAsporReturnPreference(ReturnPreference.REPRESENTATION)
```

### OData ETag auto matching

The Etag auto matching middleware will allow you to use the `If-None-Match` header in `GET` requests. 
If the ETag of the request and the current object not match, the object will be returned as usual. If the ETag matches
the object a `304 (not modified)` response will be returned. 

ETag can be used together with different caching technologies and can drastic reduce bandwidth 
which is specially important on mobile devices. You can read more about ETags [here](etag.md)

```csharp
.AddControllers().AddAsporETagAutoMatch()
```

### OData export

The Aspor export middleware extends your OData query capabilities with exporting the results directly 
into different list based file formats. You can use all available OData functionalities such 
as `$filter`, `$select` and `$expand`. The export processor will understand your query and write the
result into the request format. You can read more about Aspor Export [here](export.md)

Aspor export supports for default the following formats:
* CSV (.csv)
* Excel (.xlsx)

```csharp
.AddControllers().AddAsporExport()
```
