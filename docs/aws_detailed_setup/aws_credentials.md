---
sidebar_position: 1
---
# AWS Credentials 

Mantil consists of two main components, node and CLI. [CLI](cli_install.md) is the Mantil binary you
install on your local machine while the node is located in AWS. A node consists of Lambda functions and other AWS resources used for managing Mantil projects in the cloud and will be explained in detail in the upcoming chapter.

You need to bring your own AWS account to work with Mantil. However, if you don't have one, you can easily create it by following [AWS instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/). To install a node into your AWS account Mantil requires account credentials with IAM `AdministratorAccess` privileges. 

Mantil will never store your credentials; those are only used to set up a node into an AWS account. After the node is installed, all other communication is between the Mantil command line and the node. That means that node install/uninstall phases are the only time you need to provide AWS account credentials. 

Node functions have only necessary IAM permissions. All the resources created for the Mantil node (API Gateway, Lambda function, IAM roles) have the 'mantil-' prefix. You can list node resources by the `mantil aws resources` command.