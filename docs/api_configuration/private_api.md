---
sidebar_position: 3
---

# Private APIs

Using the `private` field, you can set your functions as private, which will require additional authorization to execute methods through API. Private and public keys are generated when creating a new stage which are then used to generate JWT on each request. This token is verified through the authorizer Lambda function. Token generation is done automatically if you're using the `invoke` command.