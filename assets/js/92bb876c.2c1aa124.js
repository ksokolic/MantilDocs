"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},p="Your First Mantil Project",s={unversionedId:"getting_started",id:"getting_started",title:"Your First Mantil Project",description:"This guide has accompanying video available on youtube.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Uninstall",permalink:"/aws_detailed_setup/aws_uninstall"},next:{title:"Node",permalink:"/concepts/node"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Your first Mantil project",id:"your-first-mantil-project-1",level:2},{value:"Project Stage",id:"project-stage",level:2},{value:"Exploring demo project",id:"exploring-demo-project",level:2},{value:"Testing",id:"testing",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Working",id:"working",level:2},{value:"Cleanup",id:"cleanup",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-mantil-project"},"Your First Mantil Project"),(0,r.kt)("p",null,"This guide has accompanying video available on ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Fp64VgSLoTQ"},"youtube"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go"),(0,r.kt)("li",{parentName:"ul"},"Mantil ",(0,r.kt)("a",{parentName:"li",href:"/cli_install"},"cli")),(0,r.kt)("li",{parentName:"ul"},"Mantil ",(0,r.kt)("a",{parentName:"li",href:"/aws_detailed_setup/node_install"},"node"))),(0,r.kt)("p",null,"We assume that you are Go programmer so you have Go installed. After that you\nneed to download Mantil cli and set up Mantil node on your AWS account. "),(0,r.kt)("h2",{id:"your-first-mantil-project-1"},"Your first Mantil project"),(0,r.kt)("p",null,"Create a new project with ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil new")," command. It just creates ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/docs/blob/main/concepts.md#project"},"project structure"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil new my-project\n\nYour project is ready in ./my-project\n\n\u279c tree my-project\nmy-project\n\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 ping\n\u2502\xa0\xa0     \u251c\u2500\u2500 ping.go\n\u2502\xa0\xa0     \u2514\u2500\u2500 ping_test.go\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 environment.yml\n\u2502\xa0\xa0 \u2514\u2500\u2500 state.yml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 test\n    \u251c\u2500\u2500 init.go\n    \u2514\u2500\u2500 ping_test.go\n\n4 directories, 8 files\n")),(0,r.kt)("p",null,"API folder is most interesting. Each Go package in the API folder, after\ndeployment, becomes part of you applications API interface."),(0,r.kt)("p",null,"All other project commands are intended to be used from somewhere in the project\ntree. So enter the project now ",(0,r.kt)("inlineCode",{parentName:"p"},"cd my-project"),".  "),(0,r.kt)("h2",{id:"project-stage"},"Project Stage"),(0,r.kt)("p",null,"One Mantil project can have multiple deployments, each called deployment stage.\nSo we can have stage for development, staging, production and so on. Each stage\nrequires some resources on AWS and each stage is completely isolated from all\nother stages.",(0,r.kt)("br",{parentName:"p"}),"\n","Stage is created on the specified node (if you have just one node than you don't\nneed to say on which node)."),(0,r.kt)("p",null,"To create first stage, named development run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil stage new development\n\nCreating stage development on node demo\n...\n\nDeploy successful!\nBuild time: 625ms, upload: 728ms (5.4 MiB), update: 28.573s\n\nStage development is ready!\nEndpoint: https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com\n")),(0,r.kt)("p",null,"This operation usually takes less than a minute to complete. Upon completion we\nhave fully functional API on the AWS infrastructure. "),(0,r.kt)("p",null,"To see what resources is created run ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil aws resources --stage development"),"."),(0,r.kt)("p",null,"Endpoint from the command output is the api URL.\nTo test that API exists run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil invoke ping\n200 OK\npong\n")),(0,r.kt)("p",null,"You can get the same result with any other tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c curl -X POST $(mantil env --url)/ping\npong%\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mantil env --url")," returns API endpoint."),(0,r.kt)("p",null,"Each Go package in the api folder becomes route in the project URL. Package is\nexpected to have exported New method which returns struct pointer. All exported\nmethods of that struct will become accessible on endpoint/package/method URL. If\nthere is a method named Default it is accessible on the endpoint/package\n(without method name) URL."),(0,r.kt)("p",null,"In our example package name is ping and we have Default method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'func (p *Ping) Default() string {\n    return "pong"\n}\n')),(0,r.kt)("h2",{id:"exploring-demo-project"},"Exploring demo project"),(0,r.kt)("p",null,"To execute non-default method we need to add method name to the path. Here is example of calling another method, named\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/11ff351b83ded21b93e6bdb0bd409273ef6075a6/api/ping/ping.go#L27"},"Hello"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c mantil invoke ping/hello --data "World"\n200 OK\nHello, World\n')),(0,r.kt)("p",null,"Hello method is again simple string in string out. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'func (p *Ping) Hello(ctx context.Context, name string) (string, error) {\n    return "Hello, " + name, nil\n}\n')),(0,r.kt)("p",null,"You can also use curl for calling any method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c curl -X POST $(mantil env --url)/ping/hello --data "World"\nHello, World%\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/11ff351b83ded21b93e6bdb0bd409273ef6075a6/api/ping/ping.go#L42"},"ReqRsp"),"\ndemonstrates JSON formatted request/response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c mantil invoke ping/reqrsp --data \'{"name":"World"}\'\n200 OK\n{\n   "Response": "Hello, World"\n}\n')),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/11ff351b83ded21b93e6bdb0bd409273ef6075a6/api/ping/ping.go#L61"},"logs"),"\nmethod demonstrates display of function logs with invoke command. If your Lambda\nfunction is logging, the log lines are captured and shown before command output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c mantil invoke ping/logs --data \'{"name":"Foo"}\'\n\u03bb start Logs method\n\u03bb req.Name: \'Foo\'\n\u03bb end\n200 OK\n{\n   "Response": "Hello, Foo"\n}\n')),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"This project comes with integration tests. Run them with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil test\n=== RUN   TestPing\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/hello\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/hello\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/reqrsp\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/reqrsp2\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/non-existent-method\n--- PASS: TestPing (0.62s)\nPASS\nok      my-project/test 0.902s\n")),(0,r.kt)("p",null,"Test are located in test directory. When run they are using current stage to\nmake requests and explore results."),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,'Lets first make some change into project to enable deployment. For example\nchange "pong" string in Default method (file: api/ping/ping.go) to something\nelse. I\'ll change it to "my-project" and than deploy changes with:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil deploy\n\nBuilding and deploying my-project to stage development\nBuilding...\nUploading changes...\n    ping\nUpdating infrastructure...\n\nDeploy successful!\nBuild time: 636ms, upload: 789ms (5.4 MiB), update: 1.618s\n")),(0,r.kt)("p",null,"To test new behavior run invoke again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil invoke ping\n200 OK\nmy-project\n")),(0,r.kt)("p",null,"Run also ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil test")," again, it is failing because of this change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c mantil test\n=== RUN   TestPing\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping\n    reporter.go:23:\n            Error Trace:    reporter.go:23\n                                        chain.go:21\n                                        string.go:115\n                                        ping_test.go:17\n            Error:\n                            expected string equal to:\n                             "pong"\n\n                            but got:\n                             "my-project"\n            Test:           TestPing\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/hello\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/hello\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/reqrsp\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/reqrsp2\n    printer.go:54: POST https://b2vhijcf2d.execute-api.eu-central-1.amazonaws.com/ping/non-existent-method\n--- FAIL: TestPing (0.58s)\nFAIL\nexit status 1\nFAIL    my-project/test 0.867s\n')),(0,r.kt)("h2",{id:"working"},"Working"),(0,r.kt)("p",null,"There is ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil watch")," command to support this change/deploy/invoke cycle. It\nis monitoring project files for changes. On each change it deploys project and\ncan call a method or run tests. Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mantil watch --method ping\n")),(0,r.kt)("p",null,"and then change return string of the Default method and save changes few times\nto get the feeling."),(0,r.kt)("p",null,"To create new API run generate add implementation and deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil generate api second\nGenerating function second\ntest/init.go already exists\nGenerating test/second_test.go...\nGenerating api/second/second.go...\n")),(0,r.kt)("p",null,"Now edit api/second/second.go add methods and deploy."),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"To remove project Stage from you AWS account run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mantil stage destroy development\n")),(0,r.kt)("p",null,"and after that ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil aws uninstall")," with the same attributes as in the first\n",(0,r.kt)("inlineCode",{parentName:"p"},"aws install")," step. And that's all. Your AWS account is the initial state."))}m.isMDXComponent=!0}}]);