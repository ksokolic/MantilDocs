---
sidebar_position: 16
---

# mantil invoke

Invokes API method on the project stage

Makes HTTP request to the gateway endpoint of the project stage. That invokes
Lambda function of that project api. If API method is not specified default
(named Default in Go code) is assumed.

Mantil project is determined by the current shell folder.
You can be anywhere in the project tree.
If not specified (--stage option) default project stage is used.

During lambda function execution their logs are shown in terminal. Each lambda
function log line is preffixed with λ symbol. You can hide that logs with the
--no-log option.

This is a convenience method and provides similar output to calling:
$ curl -X POST https://&lt;stage_endpoint_url&gt;/&lt;api&gt;[/method] [-d '&lt;data&gt;'] [-i]

### USAGE
```
  mantil invoke &lt;api&gt;[/method] [options]
```
### ARGUMENTS
```
  &lt;api&gt;      Name of the API. Your APIs are in /api folder.
  [/method]  Method name in Go source code.
            Default method will called if not spedified.
```
### OPTIONS
```
  -d, --data string    Data for the method invoke request
  -i, --include        Include response headers in the output
  -n, --no-logs        Hide lambda execution logs
  -s, --stage string   Project stage to target instead of default
```
### EXAMPLES
```
  ==&gt; invoke Default method in Ping api
  $ mantil invoke ping
  200 OK
  pong

  ==&gt; invoke Hello method in Ping api with 'Mantil' data
  $ mantil invoke ping/hello -d 'Mantil'
  200 OK
  Hello, Mantil

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
