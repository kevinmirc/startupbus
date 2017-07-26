require('./info.scss');

angular.module('sampleApp')
  .component('info', {
    bindings: {},
    template: require('./info.html'),
    controller: function () {
      var ctrl = this;

      ctrl.$onInit = function () {
      };
    }
  });
