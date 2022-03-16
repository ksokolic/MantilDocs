To see what resources are created for the node run `mantil aws resources` command:
```
➜ mantil aws resources

Node demo
Resources:
|    NAME    |         TYPE         |     AWS RESOURCE NAME      |               CLOUDWATCH LOG GROUP               |
|------------|----------------------|----------------------------|--------------------------------------------------|
| setup      | Lambda Function      | mantil-setup-7582352e      | /aws/lambda/mantil-setup-7582352e                |
| authorizer | Lambda Function      | mantil-authorizer-7582352e | /aws/lambda/mantil-authorizer-7582352e           |
| deploy     | Lambda Function      | mantil-deploy-7582352e     | /aws/lambda/mantil-deploy-7582352e               |
| destroy    | Lambda Function      | mantil-destroy-7582352e    | /aws/lambda/mantil-destroy-7582352e              |
| security   | Lambda Function      | mantil-security-7582352e   | /aws/lambda/mantil-security-7582352e             |
| setup      | CloudFormation Stack | mantil-setup-7582352e      |                                                  |
| http       | API Gateway          | mantil-http-7582352e       | /aws/vendedlogs/mantil-http-access-logs-7582352e |
|            | S3 Bucket            | mantil-7582352e            |                                                  |
Tags:
|       KEY        |         VALUE          |
|------------------|------------------------|
| MANTIL_KEY       | 7582352e               |
| MANTIL_WORKSPACE | LhvoKl2bQEib2UFhs7ypIA |
```

All node resources have prefix 'mantil-' in the name and a random suffix. 
Node consist of few Lambda functions, CloudFormation stack, API Gateway, S3 bucket and CloudWatch log groups.