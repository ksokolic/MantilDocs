"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[9349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:9},s="mantil stage",i={unversionedId:"commands/mantil_stage",id:"commands/mantil_stage",title:"mantil stage",description:"Manages project stages",source:"@site/docs/commands/mantil_stage.md",sourceDirName:"commands",slug:"/commands/mantil_stage",permalink:"/commands/mantil_stage",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"mantil aws resources",permalink:"/commands/mantil_aws_resources"},next:{title:"mantil stage new",permalink:"/commands/mantil_stage_new"}},l={},c=[{value:"USAGE",id:"usage",level:3},{value:"COMMANDS",id:"commands",level:3},{value:"GLOBAL OPTIONS",id:"global-options",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mantil-stage"},"mantil stage"),(0,a.kt)("p",null,"Manages project stages"),(0,a.kt)("p",null,"A stage represents a named deployment of the project. A project can have\nmultiple stages. A stage for each developer, integration stage, production...\nStage is placed on a node. Different stages in the same project can be placed on\ndifferent nodes."),(0,a.kt)("h3",{id:"usage"},"USAGE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  mantil stage [command]\n")),(0,a.kt)("h3",{id:"commands"},"COMMANDS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  destroy     Destroys a stage\n  list        Lists stages in project\n  new         Creates a new stage\n  use         Sets default project stage\n\n  Use "mantil stage [command] --help" for more information about a command.\n')),(0,a.kt)("h3",{id:"global-options"},"GLOBAL OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --help       Show command help\n      --no-color   Don't use colors in output\n")))}m.isMDXComponent=!0}}]);