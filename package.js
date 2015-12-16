Package.describe({
  name: 'quackware:meteor-js-xlsx-client',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Client side wrapper for xlsx js',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles(['js-xlsx/dist/xlsx.js'], 'client');
  api.export("XLSX");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('quackware:meteor-js-xlsx-client', 'client');
  api.addFiles('meteor-js-xlsx-client-tests.js', 'client');
});
