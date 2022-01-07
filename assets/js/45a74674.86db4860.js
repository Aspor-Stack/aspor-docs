"use strict";(self.webpackChunkaspor_docs=self.webpackChunkaspor_docs||[]).push([[905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},d="Aspor Validation",s={unversionedId:"service/validation",id:"service/validation",isDocsHomePage:!1,title:"Aspor Validation",description:"* Installation",source:"@site/docs/service/validation.md",sourceDirName:"service",slug:"/service/validation",permalink:"/aspor-docs/docs/service/validation",editUrl:"https://github.com/Aspor-Stack/aspor-docs/edit/master/docs/service/validation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Aspor Middlewares",permalink:"/aspor-docs/docs/service/aspor-middlewares"},next:{title:"Aspor Export",permalink:"/aspor-docs/docs/service/export"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Model Validation",id:"model-validation",children:[{value:"Validation action",id:"validation-action",children:[],level:3},{value:"OData Delta validation",id:"odata-delta-validation",children:[],level:3},{value:"System Data Annotations",id:"system-data-annotations",children:[],level:3},{value:"Aspor Annotations",id:"aspor-annotations",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Custom model validator annotation",id:"custom-model-validator-annotation",children:[],level:3}],level:2},{value:"Rule Validation",id:"rule-validation",children:[],level:2},{value:"Example",id:"example-1",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aspor-validation"},"Aspor Validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#model-validation"},"Model Validation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rule-validation"},"Rule Validation"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Install-Package Aspor.Validation\n")),(0,i.kt)("h2",{id:"model-validation"},"Model Validation"),(0,i.kt)("p",null,"The model validation will check if the properties of an object have the right value and fits into the schema."),(0,i.kt)("h3",{id:"validation-action"},"Validation action"),(0,i.kt)("p",null,"Aspor model validation differentiate between different validation action. Based on the executed action the validation\nwill behave differently. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Http Method"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Used when a new object is created with initial properties.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"PATCH"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Used when an object is updated and some properties changes (supported with delta operation)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REPLACE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"PUT"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Used when an object is overridden (supported with delta operation)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"DELETE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Used when an object is deleted")))),(0,i.kt)("h3",{id:"odata-delta-validation"},"OData Delta validation"),(0,i.kt)("p",null,"Aspor supported the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.odata.deltas.delta?view=odata-aspnetcore-8.0"},"OData Delta class"),"\nand will only validate the changed properties. So for instance, if you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Required]")," annotation for a field\nwhich has not been changed, it will not have an impact on your validation result. Also allows the delta together with the\nvalidation actions to exactly calculate if it is allowed to modify a certain field."),(0,i.kt)("h3",{id:"system-data-annotations"},"System Data Annotations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-5.0"},"https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-5.0")),(0,i.kt)("h3",{id:"aspor-annotations"},"Aspor Annotations"),(0,i.kt)("p",null,"Aspor brings additional annotations to the already available system data annotations. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OnlyServer"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Allows only the server to modify a certain property")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DisallowModification"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Disallows the modification of a certain property")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AllowOnly"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Action#ValidationAction"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Allows only one validation action on a certain property (e.g. CREATE OR UPDATE)")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[Table("projects")]\npublic class Project\n{\n\n    [Key]\n    [OnlyServer]\n    public Guid Id { get; set; }\n\n    [OnlyServer]\n    public Guid WorkspaceId { get; set; }\n\n    [MinLength(4)]\n    [MaxLength(128)]\n    [Required]\n    public string Name { get; set; }\n\n    [MinLength(4)]\n    [MaxLength(128)]\n    [Required]\n    public string Discriminator { get; set; }\n\n    public bool Public { get; set; }\n\n    [InverseProperty("Project")]\n    public virtual IList<Board> Boards { get; set; }\n        \n}\n')),(0,i.kt)("h3",{id:"custom-model-validator-annotation"},"Custom model validator annotation"),(0,i.kt)("h2",{id:"rule-validation"},"Rule Validation"),(0,i.kt)("p",null,"Rule validations allow to further improve model validation with domain specific checks.\nThe main different is, that the model validation can only be called when the entire object has been loaded or after\nthe object has been patched by an update request. During the validation the ",(0,i.kt)("inlineCode",{parentName:"p"},"IServiceProvider")," is also available,\nwhich allows you direct access to your database or other services (sync or async)."),(0,i.kt)("p",null,"The rule validation can be integrated into your object by implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"IRuleValidation")," for synchronous validation\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"IAsyncRuleValidation")," for asynchronous validation."),(0,i.kt)("h2",{id:"example-1"},"Example"),(0,i.kt)("p",null,"We will extend our current project model with a custom rule validation that will prevent multiple\nprojects with the same discriminator in a workspace. If already another project with the new discriminator is available,\nour validation will fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[Table("projects")]\npublic class Project : IAsyncRuleValidation\n{\n\n    [Key]\n    [OnlyServer]\n    public Guid Id { get; set; }\n\n    [OnlyServer]\n    public Guid WorkspaceId { get; set; }\n\n    [MinLength(4)]\n    [MaxLength(128)]\n    [Required]\n    public string Name { get; set; }\n\n    [MinLength(4)]\n    [MaxLength(128)]\n    [Required]\n    public string Discriminator { get; set; }\n\n    public bool Public { get; set; }\n\n    [InverseProperty("Project")]\n    public virtual IList<Board> Boards { get; set; }\n\n    public async Task Validate(IServiceProvider services, ModelStateDictionary state, object instance)\n    {\n        //Aquire a new database context\n        DatabaseContext database = services.GetRequiredService<DatabaseContext>();\n        \n        //Check if there is already another project with the same discriminator in the same workspace \n        //(make sure to exclude the current object from the check)\n        if (await database.Projects.Where(p => p.Id != Id && p.WorkspaceId == WorkspaceId && p.Discriminator == Discriminator).AnyAsync()) \n        {\n            //Throw a model validation error\n            state.AddModelError("discriminator", "Project discriminator must be unique in a workspace");\n        }\n    }\n    \n}\n')))}u.isMDXComponent=!0}}]);