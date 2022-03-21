---
sidebar_position: 13
---

# FAQ

## How Mantil is different than (Cloudformation, SAM, CDK, Terraform, Serverless Framework)?

Most of the other frameworks are focused on building infrastructure. As that they are focused to the ops side. Mantil is dev tool.

Mantil is focused on the developer who uses Go to build backend service in the cloud. It aims to remove any ops work from the development workflow.

We are using those cloud frameworks internally. Currently Cloudformation, Terraform and AWS SDK. Our goal is not to fight with these great tools feature by feature but to build on top of them. In Mantil developers are writing pure Go code without any notion of AWS or Lambda. They don't need upfront understanding of complex AWS ecosystem and tooling.  

What makes Mantil different?
 * tailored for the Go developers
 * promotes cloud first build/deploy/test cycle
 * supports getting logs during the execution of lambda function, not after the function is completed
 * enables cloud first end to end testing
 * enables easy firing multiple project stages (deployments)

## What I need to start using Mantil?
Go, [Mantil cli](cli_install.md) and an [AWS account credentials](aws_detailed_setup/aws_credentials.md).  
Mantil is tool for Go developers so you need [Go](https://go.dev) to build you APIs code into Lambda functions. 

