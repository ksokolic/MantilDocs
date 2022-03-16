"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[6448],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Using a Mantil API",s={unversionedId:"Usage/api",id:"Usage/api",title:"Using a Mantil API",description:"After deploying a Mantil API it will be accessible through its API gateway endpoints.",source:"@site/docs/Usage/api.md",sourceDirName:"Usage",slug:"/Usage/api",permalink:"/MantilDocs/docs/Usage/api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Usage/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/MantilDocs/docs/Examples"},next:{title:"Data Storage",permalink:"/MantilDocs/docs/Usage/data_storage"}},p={},u=[{value:"REST",id:"rest",level:2},{value:"WebSocket",id:"websocket",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-a-mantil-api"},"Using a Mantil API"),(0,o.kt)("p",null,"After deploying a Mantil API it will be accessible through its API gateway endpoints."),(0,o.kt)("h2",{id:"rest"},"REST"),(0,o.kt)("p",null,"Using the REST API is simple, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mantil invoke <api_name>\n")),(0,o.kt)("p",null,"to invoke the default method, or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mantil invoke <api_name>/<method_name>\n")),(0,o.kt)("p",null,"to invoke a specific method."),(0,o.kt)("p",null,"Invoke accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"--data")," option which can be used to send additional data in the request. Data can be either basic type, such as string, or JSON, depending on the parameters of your method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mantil invoke <api_name>/<method_name> --data <data>\n")),(0,o.kt)("p",null,"You can also get the endpoint using ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil env -u")," and invoke it directly, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST $(mantil env -u)/<api_name>/<method_name>\n")),(0,o.kt)("p",null,"In the case of GET request query parameters will be mapped to the parameters of your method with appropriate type conversions.\nFor example, method with following struct as a parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Person struct {\n    Name   string\n    Age    int\n    Amount float64\n}\n")),(0,o.kt)("p",null,"can be invoked with following request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET $(mantil env -u)/<api_name>/<method_name>?name=John&age=25&amount=50.4\n")),(0,o.kt)("h2",{id:"websocket"},"WebSocket"),(0,o.kt)("p",null,"Each API can be accessed via WebSocket which is useful for applications that need to update in real time. The WebSocket API can be used in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Publish/Subscribe - An API can publish messages to a subject. Clients can subscribe to this subject to receive new messages."),(0,o.kt)("li",{parentName:"ol"},"Request/Response - This is used for synchronous communication and is equivalent to calling the regular REST endpoint for the API.")),(0,o.kt)("p",null,"For client-side use we provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/mantil.js"},"JavaScript SDK"),"."),(0,o.kt)("p",null,"A complete example on how to use the WebSocket API can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-chat"},"chat")," template."),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")))}d.isMDXComponent=!0}}]);