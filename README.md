# Country flag FieldFormat Plugin for Kibana 7

### About
This is a plugin for Kibana 7+. Has been developed and tested on Kibana 7.3.0 version. The plugin uses [flag-icon-css](https://github.com/lipis/flag-icon-css)

Older version:
 - [6.x](https://github.com/nabilbendafi/country-flag-fieldformatters/tree/6.x)
 - [5.x](https://github.com/nabilbendafi/country-flag-fieldformatters/tree/5.x)

![Screenshot](https://raw.githubusercontent.com/nabilbendafi/country-flag-fieldformatters/master/images/country.jpg)

### Usage
Installation steps:
```
$ git clone -b v7.6.2 https://github.com/elastic/kibana
$ cd kibana
$ git clone https://github.com/nabilbendafi/country-flag-fieldformatters.git plugins/country-flag-fieldformatters
$ cd plugins/country-flag-fieldformatters
$ yarn kbn bootstrap
$ yarn build
```
This will provide a `build/country-flag-fieldformatters-X.X.X.zip` ready to be installed

or install released plugin from Github.
```
$ bin/kibana-plugin install https://github.com/nabilbendafi/country-flag-fieldformatters/releases/download/v1.3.0/country-flag-fieldformatters-1.3.0.zip
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

### Donate
Feel free to support this project
<a href="https://www.buymeacoffee.com/bBxq5vkoE" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
