module.exports = function() {
  var app = './app/';
  var temp = './.tmp/';

  var config = {
    // File Paths
    watchFiles: [
      temp + '**/*.{js,css,html}',
      app + '**/*.{js}'
    ],
    // All JavaScript files to vet
    alljs: [
      app + '**/*.js',
      './*.js'
    ],
    app: app,
    temp: temp,
    css: temp + '**/*.css',
    index: app + 'index.jade',
    js: [
      app + '**/*.js',
      '!' + app + '**/*.spec.js'
    ],
    sass: app + '**/*.scss',
    jade: app + '**/*.jade',

    // Bower and npm locations
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    }
  };

  config.getWiredepDefaultOptions = function () {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
    return options;
  };

  return config;
};
