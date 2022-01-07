"use strict";(self.webpackChunkaspor_docs=self.webpackChunkaspor_docs||[]).push([[90],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6442:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},d="Aspor Middlewares",s={unversionedId:"service/aspor-middlewares",id:"service/aspor-middlewares",isDocsHomePage:!1,title:"Aspor Middlewares",description:"Aspor brings different middlewares which will extend your OData api with different functionalities.",source:"@site/docs/service/aspor-middlewares.md",sourceDirName:"service",slug:"/service/aspor-middlewares",permalink:"/aspor-docs/docs/service/aspor-middlewares",editUrl:"https://github.com/Aspor-Stack/aspor-docs/edit/master/docs/service/aspor-middlewares.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/aspor-docs/docs/service/getting-started"},next:{title:"Aspor Validation",permalink:"/aspor-docs/docs/service/validation"}},c=[{value:"Automatic pre validation checks",id:"automatic-pre-validation-checks",children:[],level:3},{value:"OData page sizing",id:"odata-page-sizing",children:[],level:3},{value:"OData return preference",id:"odata-return-preference",children:[],level:3},{value:"OData ETag auto matching",id:"odata-etag-auto-matching",children:[],level:3},{value:"OData export",id:"odata-export",children:[],level:3}],p={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aspor-middlewares"},"Aspor Middlewares"),(0,i.kt)("p",null,"Aspor brings different middlewares which will extend your OData api with different functionalities.\nThe middlewares are located in different packages, see ",(0,i.kt)("a",{parentName:"p",href:"/aspor-docs/docs/service/getting-started#installation"},"here")," to get more information about the installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#automatic-pre-validation-checks"},"Automatic pre validation checks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#odata-page-sizing"},"OData page sizing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#odata-return-preference"},"OData return preference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#odata-etag-auto-matching"},"OData ETag auto matching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#odata-export"},"OData export"))),(0,i.kt)("h3",{id:"automatic-pre-validation-checks"},"Automatic pre validation checks"),(0,i.kt)("p",null,"This simple middleware will add model validation checks and return a ",(0,i.kt)("inlineCode",{parentName:"p"},"400 (bad request)")," if the validation fails\nand will prevent the controller action to get executed. You can read more about the validation ",(0,i.kt)("a",{parentName:"p",href:"/aspor-docs/docs/service/validation"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},".AddControllers().AddAutoPreValidationCheck()\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The pre validation middleware will not execute rule validations because the object is not fully available at this time."))),(0,i.kt)("h3",{id:"odata-page-sizing"},"OData page sizing"),(0,i.kt)("p",null,"The OData page sizing middleware brings a default result size to all your ",(0,i.kt)("inlineCode",{parentName:"p"},"[EnableQuery]")," functions.\nIf no page size has been defined, the default configured amount will be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"//Defualt amount will be set to 1000\n.AddControllers().AddAsporODataPageSize()\n\n//Custom default amount\n.AddControllers().AddAsporODataPageSize(2000)\n")),(0,i.kt)("h3",{id:"odata-return-preference"},"OData return preference"),(0,i.kt)("p",null,"The OData return preference middleware will allow you to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefer")," header to control how objects are return\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," requests. This will reduce bandwidth if used correctly."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"return=minimal")," ",(0,i.kt)("br",null),"\nThe minimal return preference value will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"204 (no content)")," response to indicate the response\nsucceeded but will not return the changed object. This return preference should be used when you want to change an object\nbut do not need the return of the changed object (e.g. because they are already available on the client)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"return=representation")," ",(0,i.kt)("br",null),"\nThe representation will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"200 (ok)")," response including the representation of the changed object\nwith all properties."),(0,i.kt)("p",null,"Using the right return preferences can drastic reduce bandwidth which is specially important\non mobile devices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"//The minimal return preference is used if no header is defined\n.AddControllers().AddAsporReturnPreference()\n\n//Change the default return preference if no header is defined\n.AddControllers().AddAsporReturnPreference(ReturnPreference.REPRESENTATION)\n")),(0,i.kt)("h3",{id:"odata-etag-auto-matching"},"OData ETag auto matching"),(0,i.kt)("p",null,"The Etag auto matching middleware will allow you to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"If-None-Match")," header in ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests.\nIf the ETag of the request and the current object not match, the object will be returned as usual. If the ETag matches\nthe object a ",(0,i.kt)("inlineCode",{parentName:"p"},"304 (not modified)")," response will be returned. "),(0,i.kt)("p",null,"ETag can be used together with different caching technologies and can drastic reduce bandwidth\nwhich is specially important on mobile devices. You can read more about ETags ",(0,i.kt)("a",{parentName:"p",href:"/aspor-docs/docs/service/etag"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},".AddControllers().AddAsporETagAutoMatch()\n")),(0,i.kt)("h3",{id:"odata-export"},"OData export"),(0,i.kt)("p",null,"The Aspor export middleware extends your OData query capabilities with exporting the results directly\ninto different list based file formats. You can use all available OData functionalities such\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"$filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$select")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$expand"),". The export processor will understand your query and write the\nresult into the request format. You can read more about Aspor Export ",(0,i.kt)("a",{parentName:"p",href:"/aspor-docs/docs/service/export"},"here")),(0,i.kt)("p",null,"Aspor export supports for default the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSV (.csv)"),(0,i.kt)("li",{parentName:"ul"},"Excel (.xlsx)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},".AddControllers().AddAsporExport()\n")))}u.isMDXComponent=!0}}]);