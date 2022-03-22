---
sidebar_position: 8
---

# mantil aws resources

Shows AWS resources created by Mantil

When executed inside Mantil project command will show resources created
for current project stage and node of that stage.
To show resources for other, non current, stage use --stage option.

When executed outside of Mantil project command will show resources of
the all nodes in the workspace.
Use --nodes options to get this behavior when inside of Mantil project.

### USAGE
```
  mantil aws resources [options]
```
### OPTIONS
```
  -n, --nodes          Show resources for each workspace node
  -s, --stage string   Show resources for this stage
```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```
### LEARN MORE
```
  Visit https://github.com/mantil-io/docs to learn more.
  For further support contact us at support@mantil.com.
```
