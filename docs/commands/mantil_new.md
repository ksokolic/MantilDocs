---
sidebar_position: 14
---

# mantil new

Creates a new Mantil project

Creates a new Mantil project from the source provided with the --from option.
The source can either be an existing git repository or one of the predefined templates:
ping            - https://github.com/mantil-io/template-ping
excuses         - https://github.com/mantil-io/template-excuses
chat            - https://github.com/mantil-io/template-chat
todo            - https://github.com/mantil-io/template-todo
github-to-slack - https://github.com/mantil-io/template-github-to-slack

If no source is provided it will default to the template "ping".

By default, the Go module name of the initialized project will be the project name.
This can be changed by setting the --module-name option.

### USAGE
```
  mantil new &lt;project&gt; [options]
```
### ARGUMENTS
```
  &lt;project&gt;  Name of the new project.
```
### OPTIONS
```
      --from string          Name of the template or URL of the repository that will be used as one
      --module-name string   Replace module name and import paths
```
### EXAMPLES
```
  ==&gt; new project with default structure:
  $ mantil new my-project

  ==&gt; new project from built-in template:
  $ mantil new my-project --from excuses

  ==&gt; new project from any available template:
  $ mantil new my-project --from https://github.com/mantil-io/template-excuses

```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```

