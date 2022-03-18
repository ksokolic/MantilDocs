---
sidebar_position: 2
---

# Stage

The stage is an installation of a project into the cloud. Before creating stage, the project is
just a set of files. Once you create a stage that builds Lambda functions from your
api's, API Gateway for that functions and other supporting resources. With that
project gets a live endpoint where you can execute your api's.

The stage is located on a node. While creating stage `mantil stage
new` you specify node for the stage. You can
have multiple stages of the project. Each can be located on a different node.

While working in the project, there is a notion of default stage. One stage is always
default, so it is the target of all other project commands. So, for example, when you
deploy/test/watch logs..., you execute those commands on the default stage.
To see all the stages and see which one is default there is `mantil stage
ls` command, and to change default `mantil
stage use`.

## Stage endpoint

When created each stage gets two endpoints: HTTP and WebSocket. Endpoint is URL
where stage API's are exposed. 

HTTP endpoint will be something like:
_https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com_, and WebSocket:
__wss://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com_.