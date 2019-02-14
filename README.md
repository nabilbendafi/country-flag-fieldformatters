# Country flag FieldFormat Plugin for Kibana 6

### About
This is a plugin for Kibana 6+. Has been developed and tested on Kibana 6.6.0 version. The plugin uses [flag-icon-css](https://github.com/lipis/flag-icon-css)

Older version:
 [5.x](nabilbendafi/country-flag-fieldformatters/tree/5.x)

![Screenshot](https://raw.githubusercontent.com/nabilbendafi/country-flag-fieldformatters/master/images/country.jpg)

### Usage
Installation steps:
```
$ cd KIBANA_HOME/plugins
$ git clone https://github.com/nabilbendafi/country-flag-fieldformatters.git country-flag-fieldformatters
$ cd country-flag-fieldformatters
$ npm install
```
or
```
$ bin/kibana-plugin install https://github.com/nabilbendafi/country-flag-fieldformatters/releases/download/v1.1.0/country-flag-fieldformatters-1.1.0.zip
```

Unistall:
```
$ bin/kibana-plugin remove country-flag-fieldformatters
```

### Configure
Under _Management_ > _Index Patterns_:
 * update *Format* type to *Country Flag* for any <geoip_field>.country_code2

### Screenshots
![Screenshot](https://raw.githubusercontent.com/nabilbendafi/country-flag-fieldformatters/master/images/configuration.jpg)

### Contributions
Anyone is welcome to contribute to my project. There are various ways you can contribute:

1. Open an [Issue](https://github.com/nabilbendafi/country-flag-fieldformatters/issues) on GitHub
2. Send me a Pull Request with your bug fixes and/or new features
3. Contact via email: **nabil@bendafi.fr**
