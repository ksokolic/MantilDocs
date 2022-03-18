---
sidebar_position: 4
---

# Custom domain names

Custom domain names are simpler and more intuitive URLs that you can provide to your API users. By default, you can access APIs through the default API gateway URLs, which are generated for each stage and have the following format:
```
https://<http-api-id>.execute-api.<region>.amazonaws.com/<api_name>/<method_name>
```
and
```
wss://<ws-api-id>.execute-api.<region>.amazonaws.com/$default
```

In order to set up a custom domain for your stage, you need the following:
- a Route 53 public hosted zone
- a registered domain configured to use the name servers of that hosted zone. The easiest way to achieve this is by registering the domain with Route 53. This will automatically create a hosted zone.
- a certificate covering all the subdomains that will be created

Then you can use the `custom_domain` field in the stage config to set up the domain. It accepts the following arguments:
`domain_name` - (Required) The registered domain name.
`http_subdomain` - (Optional) The subdomain to use for HTTP APIs. Defaults to `api`.
`ws_subdomain` - (Optional) The subdomain to use for WebSocket APIs. Defaults to `ws`.
`cert_domain` - (Optional) The domain name of the certificate. Defaults to the value of the `domain_name` parameter.
`hosted_zone_domain` - (Optional) The domain name of the hosted zone. Defaults to the value of the `domain_name` parameter.

For example, the simplest setup for the domain `example.com` would look like this:
```
project:
  stages: 
    - name: production
      custom_domain:
        domain_name: example.com
```
After deploying this stage it will have the following endpoints:
```
https://api.example.com
```
and
```
wss://ws.example.com
```
