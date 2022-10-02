---
sidebar_position: 11
---

# mantil stage destroy

Destroys a stage

This command will destroy all resources belonging to a stage.
Optionally, you can set the --all option to destroy all stages of a project.

By default you will be asked to confirm the destruction.
This behavior can be disabled using the --yes option.

### USAGE
```
  mantil stage destroy <name> [options]
```
### ARGUMENTS
```
  <name>  Name for the stage to destroy.
```
### OPTIONS
```
      --all   Destroy all stages
  -y, --yes   Assume 'yes' as answer to all prompts
```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```

