"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[181],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},p="Project Structure",c={unversionedId:"concepts/project",id:"concepts/project",title:"Project Structure",description:"The project is a set of files on the disk and, of course, in a version control system.",source:"@site/docs/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/concepts/project",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stage",permalink:"/concepts/stage"},next:{title:"Developing in The Cloud",permalink:"/concepts/cloud_development"}},s={},u=[{value:"API",id:"api",level:2},{value:"Public folder",id:"public-folder",level:2},{value:"Build folder",id:"build-folder",level:2},{value:"Config folder",id:"config-folder",level:2},{value:"Test",id:"test",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"The project is a set of files on the disk and, of course, in a version control system.\nYou are creating new project with ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil new"),".\nThat creates project structure and nothing more. Until you create a project\nstage project don't have anything but files on the disk."),(0,o.kt)("p",null,"In Mantil we choose to favor convention over configuration. A big part of that\nconvention is in the Mantil project structure. Let's look into an example Mantil\nproject with two API's: ping and second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u251c\u2500\u2500 ping\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ping.go\n\u2502   \u2502   \u2514\u2500\u2500 ping_test.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 second\n\u2502\xa0\xa0     \u2514\u2500\u2500 second.go\n\u251c\u2500\u2500 build\n\u2502\xa0\xa0 \u2514\u2500\u2500 functions\n\u2502\xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 ping\n|       |   \u251c\u2500\u2500 main.go\n|       |   \u2514\u2500\u2500 bootstrap\n\u2502\xa0\xa0     \u2514\u2500\u2500 second\n|           \u251c\u2500\u2500 main.go\n|           \u2514\u2500\u2500 bootstrap\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 environment.yml\n\u2502\xa0\xa0 \u2514\u2500\u2500 state.yml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 api.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.css\n\u2514\u2500\u2500 test\n    \u251c\u2500\u2500 init.go\n    \u251c\u2500\u2500 ping_test.go\n    \u2514\u2500\u2500 second_test.go\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"API folder is a set of Go packages where each package after deployment will become\nexposed on the endpoint URL."),(0,o.kt)("p",null,"The package needs to have exported _",(0,o.kt)("em",{parentName:"p"},"New")," method, which returns a pointer to the\nstruct. That struct will be exposed at ",(0,o.kt)("em",{parentName:"p"},"endpoint/package-name")," URL. Where\nendpoint is stage endpoint URL."),(0,o.kt)("p",null,"The package named ping from the example will be exposed at ",(0,o.kt)("em",{parentName:"p"},"endpoint/ping"),". All\nexported packages methods will be exposed at ",(0,o.kt)("em",{parentName:"p"},"endpoint/ping/method-name"),". If the\npackage has the method named ",(0,o.kt)("em",{parentName:"p"},"Default"),", that method is mapped to the package root\n",(0,o.kt)("em",{parentName:"p"},"endpoint/ping"),". For example if the stage HTTP endpoint is\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com"},"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com"))," URLs of the package\nping methods will be:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Go method in ping.Ping struct"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping"},"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping")),(0,o.kt)("td",{parentName:"tr",align:null},"Default")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/hello"},"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/hello")),(0,o.kt)("td",{parentName:"tr",align:null},"Hello")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/reqrsp"},"https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/reqrsp")),(0,o.kt)("td",{parentName:"tr",align:null},"ReqRsp")))),(0,o.kt)("p",null,"The method needs to have a specific signature to be used by Mantil in API URLs. Method\nneeds to be exported and must follow these rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"may take between 0 and two arguments."),(0,o.kt)("li",{parentName:"ul"},'if there are two arguments, the first argument must satisfy the "context.Context" interface.'),(0,o.kt)("li",{parentName:"ul"},"may return between 0 and two arguments."),(0,o.kt)("li",{parentName:"ul"},"if there are two return values, the second argument must be an error."),(0,o.kt)("li",{parentName:"ul"},"if there is one return value, it must be an error.")),(0,o.kt)("p",null,"valid signatures are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   func ()\n   func () error\n   func (TIn) error\n   func () (TOut, error)\n   func (context.Context) error\n   func (context.Context, TIn) error\n   func (context.Context) (TOut, error)\n   func (context.Context, TIn) (TOut, error)\n")),(0,o.kt)("p",null,"The same as rules as for default AWS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/golang-handler.html"},"Go\nhandler")," with\nthe added convention that each method in the API struct is exposed as a URL path."),(0,o.kt)("h2",{id:"public-folder"},"Public folder"),(0,o.kt)("p",null,"A public folder is a place for your static site content. Put an ",(0,o.kt)("em",{parentName:"p"},"index.html")," file in\nthe ",(0,o.kt)("em",{parentName:"p"},"/public")," folder, and it will be visible at the endpoint root."),(0,o.kt)("h2",{id:"build-folder"},"Build folder"),(0,o.kt)("p",null,"The build folder is automatically generated on each deploy and contains the main package\nfor each API which is code that transforms your API's to Lambda functions.\nBinaries of your functions named ",(0,o.kt)("em",{parentName:"p"},"bootstrap")," are also placed in this folder. If\nyou're using source control, this folder should be untracked by adding it to your\n",(0,o.kt)("em",{parentName:"p"},".gitignore")," file since all data is generated on each deploy. This is\nautomatically done for you when initializing project with ",(0,o.kt)("em",{parentName:"p"},"new")," command."),(0,o.kt)("p",null,"Code in build folder uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/mantil.go"},"Mantil Go\nSDK")," to transform your API's to AWS\nLambda functions."),(0,o.kt)("h2",{id:"config-folder"},"Config folder"),(0,o.kt)("p",null,"In config folder ",(0,o.kt)("em",{parentName:"p"},"environment.yml")," is a place where you can set environment\nvariables for each Stage. So you can configure different behavior in different\nstages.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"state.yml")," is a project database file maintained by Mantil. It is stored in the project\nso you can see the history of all changes. You should not edit this file."),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Test folder if where your API end to end tests are stored. Explore\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/master/test/ping_test.go"},"ping"),"\nexample to get an idea of how to create requests and explore results. Read more about\n",(0,o.kt)("a",{parentName:"p",href:"/usage/testing"},"testing")," in Mantil."))}m.isMDXComponent=!0}}]);