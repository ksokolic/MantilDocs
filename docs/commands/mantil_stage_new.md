---
sidebar_position: 10
---

# mantil stage new

Creates a new stage

This command will create a new stage with the given name.
If the name is left empty it will default to "dev".

If only one node is set up, the stage will be deployed to that node by default.
Otherwise, you will be asked to pick a node. The node can also be specified via the --node option.

### USAGE
```
  mantil stage new &lt;name&gt; [options]
```
### ARGUMENTS
```
  &lt;name&gt;  Name for the new stage.
```
### OPTIONS
```
  -n, --node string   Node in which the stage will be created
```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```

