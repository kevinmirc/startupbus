require('angular-material/angular-material.min.css');
require('./app.scss');

require('angular/angular.js');
require('angular-animate/angular-animate.js');
require('angular-aria/angular-aria.js');
require('angular-material/angular-material.js');
require('angular-messages/angular-messages.js');
require('angular-ui-router/release/angular-ui-router.js');

(function () {
  'use strict';

  angular
    .module('sampleApp', ['ui.router', 'ngMaterial'])
    .config(appConfig)
    .run(appRun);

  function appConfig($stateProvider) {
    $stateProvider
    .state('landing', {
      url: '/',
      template: '<landing people="$ctrl.people"></landing>',
      resolve: {
        people: function (People) {
          console.log(People.getAll());
          return People.getAll();
        },
      },
      controllerAs: '$ctrl',
      controller: function (people) {
        var ctrl = this;
        ctrl.people = people;
      },
    });
  }

  function appRun($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
      console.error('stateChangeError', event);
    });
  }
})();

require('./services/people.js');
require('./states/landing/landing.js');
require('./components/people/people.js');
