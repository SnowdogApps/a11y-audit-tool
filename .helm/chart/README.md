# Generic Helm chart for single-container application

This repository holds a generic Helm chart, configurable with values.yaml, suited for single-container applications.

See details in [values.yaml](./values.yaml) for more information about configuration options.

## Usage
You need at least a custom values.yaml with `image` fields set to the location of your container image, i.e.:
```yaml
# values.yaml
image:
  repo: registry.snowdog.pro/my-project
  name: service1
  tag: 1.0.0
```

Any other configuration can also be provided this way.

Use Helm to install the chart:
```shell
$ helm install <release-name> <path-to-chart> -f values.yaml
```

## Features
### ConfigMap and Secret provisioning
1. ConfigMap

Put the data into `configMapData` - this data will be included in a ConfigMap, and then sourced to the app container. This way you can easily include your non-sensitive configurations:
```yaml
# values.yaml
configMapData:
  DB_NAME: "my-database"
  DB_PORT: "3306"
```

2. Secret

Put the data under `secrets.data` key. Note however, that these are not usually provided through values.yaml file, because of their sensitive nature.

A good practice is to store the secrets in a separate YAML, managed by [sops](https://github.com/mozilla/sops):
```yaml
# secrets.yaml
secrets:
  data:
    DB_USER: some-user
    DB_PASS: some-pass
```
Sops will encrypt the file, meaning it won't be possible to provide these values to the Helm straight away.

You have to either:
a) use Helm's support for sops, by providing the encrypted filename with `secrets://` prefix:
```shell
$ helm install <release-name> <path-to-chart> -f values.yaml -f secrets://secrets.yaml
```

b) manually decrypt secrets.yaml and provide this decrypted content as usual:
```shell
$ sops -d secrets.yaml > secrets.decrypted.yaml
$ helm install <release-name> <path-to-chart> -f values.yaml -f secrets.decrypted.yaml
```

For both of the options to work, sops has to be available along with the KMS access configured.


### Toggleable Service and Ingress objects
In case application does not require any networking, (internal or external), there is an option to disable creation of Service object completely:
```yaml
# values.yaml
service:
  enabled: false
```

And the same can be done with Ingress:
```yaml
# values.yaml
ingress:
  enabled: false    # That's a default
```

For internal (within the cluster) connectivity only, enable the Service and disable Ingress (works like that by default).
For external connectivity, enable both Service and Ingress.
