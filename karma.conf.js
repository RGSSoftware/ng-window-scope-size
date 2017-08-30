module.exports = function(config) {
  config.set({
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'windowScopeSize.js',
      'windowScopeSize.spec.js'
    ],
    frameworks: [
      'jasmine'
    ],
    browsers: [
      'PhantomJS'
    ],
    reporters: [
      'spec'
    ],
    preprocessors: {
      'app/**/!(*spec).js': ['coverage']
    },
    coverageReporter: {
      type: 'text'
    }
  });
}