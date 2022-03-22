---
slug: /
sidebar_position: 1
---

# Intro

Cloud-native development demands a new approach to building, launching, and observing cloud apps. Mantil is a modern open-source framework for writing serverless apps in Go. It allows you to quickly create and deploy applications that use AWS Lambda over a command line interface.

Start exploring Mantil by **creating a new project**.

### What you'll need

Before we can start with the new project make sure you have installed:

 * [Go](https://go.dev)
 * Mantil [cli](cli_install.md)

## Start the new project

Generate a new Mantil project using `mantil new my-project`, it just locally creates [project structure](concepts/project.md).

```
➜ mantil new my-project

Your project is ready in ./my-project

➜ tree my-project
my-project
├── api
│   └── ping
│       ├── ping.go
│       └── ping_test.go
├── config
│   ├── environment.yml
│   └── state.yml
├── go.mod
├── go.sum
└── test
    ├── init.go
    └── ping_test.go

4 directories, 8 files
```

## Create development environment

In Mantil, we [passionately believe](concepts/cloud_development.md) that **developing for the cloud should be done in the cloud**. That means we don't have support for a local environment that fakes real services. Instead, we enable you to easily and quickly create multiple stages of the same project directly in the cloud. 

To get the most out of Mantil, you should organize at least two stages: development and production. The development stage is your private sandbox where you can quickly iterate and test your changes without affecting stable production.

To start developing in the cloud [install the Mantil node](aws_detailed_setup/node_install.md) in your AWS account and set up your development stage:
```
➜ mantil stage new development

Creating stage development on node demo
...

Deploy successful!
Build time: 625ms, upload: 728ms (5.4 MiB), update: 28.573s

Stage development is ready!
Endpoint: https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com
```

## Iterate quickly

The main complaint about working in the cloud is frustrating build experiences where you need to manually make a number of steps to check minor change. With `mantil watch` app is deployed automatically on every save. Moreover, it is done in seconds, so fluid development workflow is preserved.
```
➜ mantil watch

Watching changes in /my-project/api

Changes spotted! Starting deploy
Building..
Uploading changes..
  ping
Updating infrastructure..

Deploy successful!
Build time: 6.464s, upload: 806ms (5.4 MiB), update: 2.806s

Watching changes in /my-project/api
```

Mantil also supports code testing via standard go tests or by invoking a specific function and getting logs instantly during function execution (not after the function is completed). 

## Deploy to production

Once you are ready to go live create a production stage:
```
mantil stage new production
```

**Congratulation, your AWS Lambda app is live!**

Check [Usage](Usage) and [Your First Mantil Project](getting_started.md) to get into details of working with Mantil. 
