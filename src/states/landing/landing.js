(function () {
  'use strict';

  require('./landing.scss');

  module.exports = angular
    .module('sampleApp')
    .component('landing', {
      bindings: {
        people: '<'
      },
      template: require('./landing.html'),
      controller: landingController,
    });

  function landingController() {
    var ctrl = this;

    ctrl.$onInit = function () {
      
    };
  }
})();
