(function () {
  'use strict';

  require('./schedule.scss');

  module.exports = angular
    .module('sampleApp')
    .component('schedule', {
      bindings: {
        scheduleItems: '<'
      },
      template: require('./schedule.html'),
      controller: scheduleController,
    });

  function scheduleController() {
    var ctrl = this;

    ctrl.$onInit = function () {

    };
  }
})();
