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

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/schedule');
    $stateProvider
    .state('landing', {
      url: '',
      abstract: true,
      template: '<landing layout flex></landing>',
    })
    .state('people', {
      parent: 'landing',
      url: '/people',
      template: '<people people="$resolve.people" layout flex></people>',
      resolve: {
        people: function (People) {
          return People.getAll();
        },
      },
      controllerAs: '$ctrl',
      controller: function (people) {
        var ctrl = this;
        ctrl.people = people;
      }
    })
    .state('schedule', {
      parent: 'landing',
      url: '/schedule',
      template: '<schedule schedule-items="$resolve.scheduleItems" layout="column" flex></schedule>',
      resolve: {
        scheduleItems: function (Schedule) {
          return Schedule.getAll();
        },
      },
      controllerAs: '$ctrl',
      controller: function (scheduleItems) {
        var ctrl = this;
        ctrl.scheduleItems = scheduleItems;
      }
    })
    .state('locations', {
      parent: 'landing',
      url: '/locations',
      template: '<locations locations="$resolve.locations" layout="column" flex></locations>',
      resolve: {
        locations: function (Locations) {
          return Locations.getAll();
        },
      },
      controllerAs: '$ctrl',
      controller: function (locations) {
        var ctrl = this;
        ctrl.locations = locations;
      }
    })
    .state('sponsors', {
      parent: 'landing',
      url: '/sponsors',
      template: '<sponsors sponsors="$resolve.sponsors" layout="column" flex></sponsors>',
      resolve: {
        sponsors: function (Sponsors) {
          return Sponsors.getAll();
        },
      },
      controllerAs: '$ctrl',
      controller: function (sponsors) {
        var ctrl = this;
        ctrl.sponsors = sponsors;
      }
    })
    .state('info', {
      parent: 'landing',
      url: '/info',
      template: '<info layout="column" flex></info>',
    })
    .state('payments', {
      parent: 'landing',
      url: '/payments',
      template: '<payments layout="column" flex></payments>',
    })
  }

  function appRun($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
      console.error('stateChangeError', event);
    });
  }
})();

require('./services/people.js');
require('./services/locations.js');
require('./services/schedule.js');
require('./services/sponsors.js');
require('./components/landing/landing.js');
require('./components/schedule/schedule.js');
require('./components/people/people.js');
require('./components/locations/locations.js');
require('./components/sponsors/sponsors.js');
require('./components/info/info.js');
require('./components/payments/payments.js');
