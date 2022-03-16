AWS credentials are needed just for initial setting up Mantil in your account.
After the initial setup, the other commands won't need your AWS credentials.

To install Mantil in a region of an AWS account, use `mantil aws install`. This
will create Mantil
[node](https://github.com/mantil-io/mantil/blob/master/docs/concepts.md#node) in
your AWS account. A node consists of a set of Lambda functions, API Gateway and a
S3 bucket. After the node is created, all other communication is between the CLI and
the node. 

Mantil is not storing your AWS credentials; they are only used during node
install and later uninstall. 

You can provide AWS credentials in three different ways:

- As command line arguments:

```
mantil aws install --aws-access-key-id=AKIAIOSFODNN7EXAMPLE \
                   --aws-secret-access-key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
                   --aws-region=us-east-1
```

- Set [environment
  variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
  AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION and instruct
  Mantil to use that environment:

```
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-east-1
mantil aws install --aws-env
```

- Allow Mantil to use a [named
  profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
  from your AWS configuration (~/.aws/config):

```
mantil aws install --aws-profile=my-named-profile
```

Install action usually less than 2 minutes to complete.  
After install `mantil aws nodes` command will show that node: 

```
➜ mantil aws nodes
| NAME | AWS ACCOUNT  |  AWS REGION  |    ID    | VERSION |
|------|--------------|--------------|----------|---------|
| demo | 052548195718 | eu-central-1 | 7582352e | v0.2.5  |
```

A node is located in a region of an AWS account. You can have multiple nodes in the same or different account.