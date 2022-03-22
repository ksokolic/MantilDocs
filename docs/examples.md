---
sidebar_position: 9
---
# Examples

To help you get started with Mantil, we prepared a set of examples and tutorials where you can see how to use Mantil in practice and how to organize your project. Besides just learning from examples, you can use those to bootstrap your own project with `mantil new <my_project> --from <template_name>`.

If there is any other example you would like to see, let us know in [Mantil Slack Community](https://join.slack.com/t/mantilcommunity/shared_invite/zt-z3iy0lsn-7zD_6nqEucsgygTvHmnxAw).

### [Chat](https://github.com/mantil-io/example-chat) - demonstrates WebSocket Mantil API interface


This example shows how to make a simple cloud native chat app on AWS Lambda using WebSocket API and DynamoDB. Through this example you will learn:
* How to include a WebSocket API in Mantil and use it with the provided JS SDK
* How to deploy a web application on top of AWS Lambda with Mantil

### [Todo](https://github.com/mantil-io/example-todo) - showcases persistent key/value storage


This example shows how to make a simple cloud native todo app using DynamoDB as persistent storage. Through this example you will learn:
* How to include DynamoDB table to your Mantil project using persistent key/value storage in Mantil APIs and how to perform CRUD operations
* How to deploy a web application on top of AWS Lambda with Mantil

### [Signup](https://github.com/mantil-io/example-signup) - example with JWT, AWS Lambda, SES and DynamoDB

This example shows how to create a simple sign-up workflow using Mantil. It consists of two steps:
* Registration - the user registers using a valid email address and receives an activation code
* Activation - the user uses the activation code to confirm the registration. In return, they receive a JWT token which they can then use to authenticate.

### [Excuses](https://github.com/mantil-io/example-excuses) - UI and environment variables showcase

This is a simple Mantil project template that will demonstrate a few Mantil concepts:
* The first concept to show is the use of environment variables
* The second concept is integration between UI and API

### [Github to Slack](https://github.com/mantil-io/template-github-to-slack) - example of serverless integration between GitHub and Slack

This template is an example of serverless integration between GitHub and Slack built on AWS Lambda. It enables you to process and forward events from GitHub to Slack instantly via webhooks, meaning you can modify the output based on your own needs, either per some criteria or with information in output. 

### [HN alerts](https://github.com/mantil-io/example-hn-alerts) - example of scheduled lambda function

This example shows how to create a scheduled lambda function that will look for new HackerNews stories containing specific keywords and send links to a Slack channel. It will also send notifications when a chosen user posts a comment/story or when someone comments on their comment/story.

### [Mongo Atlas](https://github.com/mantil-io/example-mongo-atlas) - example of using Mantil with Mongo Atlas

This example shows how to use AWS Lambda deployed through Mantil with Mongo Atlas.

### [Presigned s3 upload](https://github.com/mantil-io/template-presigned-s3-upload) - shows upload of files to S3 bucket through presigned URLs

This template shows how to use AWS Lambda deployed through Mantil to upload files to the S3 bucket without having direct access to the AWS account or the bucket using presigned URLs.

### [NGS chat](https://github.com/mantil-io/example-ngs-chat) - example of chat implemented with NATS

Example of chat built with Mantil and [NGS](https://synadia.com/ngs) (global communications system built on NATS.io).