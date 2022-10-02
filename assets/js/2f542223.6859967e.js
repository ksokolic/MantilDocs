"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[9330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:21},i="mantil generate api",l={unversionedId:"commands/mantil_generate_api",id:"commands/mantil_generate_api",title:"mantil generate api",description:"Generates Go code for new API",source:"@site/docs/commands/mantil_generate_api.md",sourceDirName:"commands",slug:"/commands/mantil_generate_api",permalink:"/commands/mantil_generate_api",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"mantil env",permalink:"/commands/mantil_env"},next:{title:"mantil report",permalink:"/commands/mantil_report"}},p={},c=[{value:"USAGE",id:"usage",level:3},{value:"ARGUMENTS",id:"arguments",level:3},{value:"OPTIONS",id:"options",level:3},{value:"GLOBAL OPTIONS",id:"global-options",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mantil-generate-api"},"mantil generate api"),(0,a.kt)("p",null,"Generates Go code for new API"),(0,a.kt)("p",null,"This command generates all the boilerplate code necessary to get started writing a new API.\nAn API is a lambda function with at least one (default) request/response method."),(0,a.kt)("p",null,"Optionally, you can define additional methods using the --methods option. Each method will have a separate\nentrypoint and request/response structures."),(0,a.kt)("p",null,"After being deployed the can then be invoked using mantil invoke, for example:"),(0,a.kt)("p",null,"mantil invoke ping\nmantil invoke ping/hello"),(0,a.kt)("h3",{id:"usage"},"USAGE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  mantil generate api <name> [options]\n")),(0,a.kt)("h3",{id:"arguments"},"ARGUMENTS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  <name>      Name of the API to generate.\n")),(0,a.kt)("h3",{id:"options"},"OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -m, --methods strings   Additional function methods, if left empty only the Default method will be created\n")),(0,a.kt)("h3",{id:"global-options"},"GLOBAL OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --help       Show command help\n      --no-color   Don't use colors in output\n")))}m.isMDXComponent=!0}}]);