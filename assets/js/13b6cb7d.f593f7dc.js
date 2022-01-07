"use strict";(self.webpackChunkaspor_docs=self.webpackChunkaspor_docs||[]).push([[638],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Getting started",p={unversionedId:"service/getting-started",id:"service/getting-started",isDocsHomePage:!1,title:"Getting started",description:"* Installation",source:"@site/docs/service/getting-started.md",sourceDirName:"service",slug:"/service/getting-started",permalink:"/aspor-docs/docs/service/getting-started",editUrl:"https://github.com/Aspor-Stack/aspor-docs/edit/master/docs/service/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/aspor-docs/docs/introduction"},next:{title:"Aspor Middlewares",permalink:"/aspor-docs/docs/service/aspor-middlewares"}},l=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration"},"Configuration"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"In this short getting-started guide, we expect you are already running an Asp .Net OData service (version 8).\nIf you have no experience with OData or want to start from scratch, use ",(0,o.kt)("a",{parentName:"strong",href:"https://google.com"},"this guide"),".")))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Aspor can directly be installed into your Asp .Net project with the NuGet packet manager.\nWe always recommend installing the four base packages ",(0,o.kt)("inlineCode",{parentName:"p"},"Aspor.Common"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Aspor.Validation"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Aspor.Authorization"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Aspor.EF")," to get the best experience."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Install-Package Aspor.Common Aspor.Validation Aspor.Authorization Aspor.EF Aspor.Export\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddAsporValidation();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddControllers()\n             .AddAutoPreValidationCheck()\n             .AddAsporODataPageSize()\n             .AddAsporReturnPreference()\n             .AddAsporETagAutoMatch()\n             .AddAsporExport()\n")))}u.isMDXComponent=!0}}]);