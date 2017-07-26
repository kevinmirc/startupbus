require('./sponsors.scss');

angular.module('sampleApp')
  .component('sponsors', {
    bindings: {
      sponsors: '<'
    },
    template: require('./sponsors.html'),
    controller: function () {
      var ctrl = this;

      ctrl.$onInit = function () {
      };
    }
  });
