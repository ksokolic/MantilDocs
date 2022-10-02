---
sidebar_position: 21
---

# mantil generate api

Generates Go code for new API

This command generates all the boilerplate code necessary to get started writing a new API.
An API is a lambda function with at least one (default) request/response method.

Optionally, you can define additional methods using the --methods option. Each method will have a separate
entrypoint and request/response structures.

After being deployed the can then be invoked using mantil invoke, for example:

mantil invoke ping
mantil invoke ping/hello

### USAGE
```
  mantil generate api <name> [options]
```
### ARGUMENTS
```
  <name>      Name of the API to generate.
```
### OPTIONS
```
  -m, --methods strings   Additional function methods, if left empty only the Default method will be created
```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```

