module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'country-flag-fieldformatters',
    require: ['kibana'],
    uiExports: {
      fieldFormats: ['plugins/country-flag-fieldformatters/country-flag']
    }
  });
};
