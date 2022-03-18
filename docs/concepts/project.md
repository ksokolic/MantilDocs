---
sidebar_position: 3
---

# Project Structure

The project is a set of files on the disk and, of course, in a version control system.
You are creating new project with `mantil new`.
That creates project structure and nothing more. Until you create a project
stage project don't have anything but files on the disk.

In Mantil we choose to favor convention over configuration. A big part of that
convention is in the Mantil project structure. Let's look into an example Mantil
project with two API's: ping and second.

```
├── api
│   ├── ping
│   │   ├── ping.go
│   │   └── ping_test.go
│   └── second
│       └── second.go
├── build
│   └── functions
│       ├── ping
|       |   ├── main.go
|       |   └── bootstrap
│       └── second
|           ├── main.go
|           └── bootstrap
├── config
│   ├── environment.yml
│   └── state.yml
├── go.mod
├── go.sum
├── public
│   ├── api.js
│   ├── index.html
│   └── style.css
└── test
    ├── init.go
    ├── ping_test.go
    └── second_test.go
```


## API

API folder is a set of Go packages where each package after deployment will become
exposed on the endpoint URL.

The package needs to have exported __New_ method, which returns a pointer to the
struct. That struct will be exposed at _endpoint/package-name_ URL. Where
endpoint is stage endpoint URL.

The package named ping from the example will be exposed at _endpoint/ping_. All
exported packages methods will be exposed at _endpoint/ping/method-name_. If the
package has the method named _Default_, that method is mapped to the package root
_endpoint/ping_. For example if the stage HTTP endpoint is
_https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com_ URLs of the package
ping methods will be:

| URL                                                                      | Go method in ping.Ping struct |
| ------------------------------------------------------------------------ | ----------------------------- |
| https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping           | Default                       |
| https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/hello     | Hello                         |
| https://lh5rfrc3gf.execute-api.eu-central-1.amazonaws.com/ping/reqrsp    | ReqRsp                        |


The method needs to have a specific signature to be used by Mantil in API URLs. Method
needs to be exported and must follow these rules:

* may take between 0 and two arguments.
* if there are two arguments, the first argument must satisfy the "context.Context" interface.
* may return between 0 and two arguments.
* if there are two return values, the second argument must be an error.
* if there is one return value, it must be an error.

valid signatures are:
```
   func ()
   func () error
   func (TIn) error
   func () (TOut, error)
   func (context.Context) error
   func (context.Context, TIn) error
   func (context.Context) (TOut, error)
   func (context.Context, TIn) (TOut, error)
```

The same as rules as for default AWS [Go
handler](https://docs.aws.amazon.com/lambda/latest/dg/golang-handler.html) with
the added convention that each method in the API struct is exposed as a URL path.

## Public folder

A public folder is a place for your static site content. Put an _index.html_ file in
the _/public_ folder, and it will be visible at the endpoint root.

## Build folder

The build folder is automatically generated on each deploy and contains the main package
for each API which is code that transforms your API's to Lambda functions.
Binaries of your functions named _bootstrap_ are also placed in this folder. If
you're using source control, this folder should be untracked by adding it to your
_.gitignore_ file since all data is generated on each deploy. This is
automatically done for you when initializing project with _new_ command.

Code in build folder uses [Mantil Go
SDK](https://github.com/mantil-io/mantil.go) to transform your API's to AWS
Lambda functions.

## Config folder

In config folder _environment.yml_ is a place where you can set environment
variables for each Stage. So you can configure different behavior in different
stages.  
_state.yml_ is a project database file maintained by Mantil. It is stored in the project
so you can see the history of all changes. You should not edit this file.

## Test

Test folder if where your API end to end tests are stored. Explore
[ping](https://github.com/mantil-io/template-ping/blob/master/test/ping_test.go)
example to get an idea of how to create requests and explore results. Read more about
[testing](usage/testing.md) in Mantil.
