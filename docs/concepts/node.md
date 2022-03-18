---
sidebar_position: 1
---

# Node

Two probably new concepts in Mantil are node and stage. So let's first familiarize yourself with them.

Mantil consists of two main components, node and CLI. CLI is mantil binary you
[install](cli_install.md) on your local machine.
Node is located in AWS. Node is set of functions used for managing Mantil
projects. First, you use CLI to [install a node into your AWS account](aws_detailed_setup/node_install.md). After that, CLI issues commands, and the node executes them in the cloud.

Node is installed into a region of an AWS account. You can have multiple nodes
in the same or different AWS accounts. When you are setting project stage you
choose a node for that stage.