require('./people.scss');

angular.module('sampleApp')
  .component('people', {
    bindings: {
      people: '<'
    },
    template: require('./people.html'),
    controller: function () {
      var ctrl = this;

      ctrl.$onInit = function () {
      };
    }
  });
