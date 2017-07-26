require('./locations.scss');

angular.module('sampleApp')
  .component('locations', {
    bindings: {
      locations: '<'
    },
    template: require('./locations.html'),
    controller: function () {
      var ctrl = this;

      ctrl.$onInit = function () {
      };
    }
  });
