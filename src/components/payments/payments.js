require('./payments.scss');

angular.module('sampleApp')
  .component('payments', {
    bindings: {},
    template: require('./payments.html'),
    controller: function () {
      var ctrl = this;

      ctrl.$onInit = function () {
      };
    }
  });
