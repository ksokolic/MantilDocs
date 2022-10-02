"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},s="Created Resources",i={unversionedId:"aws_detailed_setup/created_resources",id:"aws_detailed_setup/created_resources",title:"Created Resources",description:"To see what resources are created for the node run mantil aws resources command:",source:"@site/docs/aws_detailed_setup/created_resources.md",sourceDirName:"aws_detailed_setup",slug:"/aws_detailed_setup/created_resources",permalink:"/aws_detailed_setup/created_resources",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Node Installation",permalink:"/aws_detailed_setup/node_install"},next:{title:"Supported AWS Regions",permalink:"/aws_detailed_setup/aws_regions"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"created-resources"},"Created Resources"),(0,a.kt)("p",null,"To see what resources are created for the node run ",(0,a.kt)("inlineCode",{parentName:"p"},"mantil aws resources")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c mantil aws resources\n\nNode demo\nResources:\n|    NAME    |         TYPE         |     AWS RESOURCE NAME      |               CLOUDWATCH LOG GROUP               |\n|------------|----------------------|----------------------------|--------------------------------------------------|\n| setup      | Lambda Function      | mantil-setup-7582352e      | /aws/lambda/mantil-setup-7582352e                |\n| authorizer | Lambda Function      | mantil-authorizer-7582352e | /aws/lambda/mantil-authorizer-7582352e           |\n| deploy     | Lambda Function      | mantil-deploy-7582352e     | /aws/lambda/mantil-deploy-7582352e               |\n| destroy    | Lambda Function      | mantil-destroy-7582352e    | /aws/lambda/mantil-destroy-7582352e              |\n| security   | Lambda Function      | mantil-security-7582352e   | /aws/lambda/mantil-security-7582352e             |\n| setup      | CloudFormation Stack | mantil-setup-7582352e      |                                                  |\n| http       | API Gateway          | mantil-http-7582352e       | /aws/vendedlogs/mantil-http-access-logs-7582352e |\n|            | S3 Bucket            | mantil-7582352e            |                                                  |\nTags:\n|       KEY        |         VALUE          |\n|------------------|------------------------|\n| MANTIL_KEY       | 7582352e               |\n| MANTIL_WORKSPACE | LhvoKl2bQEib2UFhs7ypIA |\n")),(0,a.kt)("p",null,"All node resources have prefix 'mantil-' in the name and a random suffix.\nNode consist of few Lambda functions, CloudFormation stack, API Gateway, S3 bucket and CloudWatch log groups."))}d.isMDXComponent=!0}}]);