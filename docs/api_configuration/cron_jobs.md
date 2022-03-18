---
sidebar_position: 2
---

# Scheduled execution

Using the `cron` field, you can set up a rule to execute an API on a schedule. For example, with the following setup, the default method of the `one` API will be executed every minute:
```
project:
  stages: 
    - name: development
      functions:
      - name: one
        cron: "* * * * ? *"
        env:
          KEY: function
```
For more information about the cron syntax, please refer to the AWS docs:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html