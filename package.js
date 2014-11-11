Package.describe({
  name: 'xolvio:webdriver',
  summary: 'Webdriver for Velocity',
  version: '0.0.1',
  git: 'git@github.com:xolvio/meteor-webdriver.git',
  debugOnly: true
});

Npm.depends({
  'webdriverio': '2.2.3',
  'phantomjs': '1.9.12',
  'chai': '1.9.0'

  // TODO add support for these
  //'selenium-standalone': '2.43.1-5',
  //'selenium-webdriver': '2.43.5',
  //'wd': '0.3.9',
  //'jasmine-core': '2.0.0',
  //'mocha': '1.17.1',
});

Package.onUse(function (api) {
  api.use(['velocity:core@1.0.0-rc.1'], 'server');
  api.use(['templating'], 'client');

  api.addFiles(['server.js'], 'server');

  api.export('wdio', 'server');
});
