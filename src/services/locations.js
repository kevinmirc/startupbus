angular.module('sampleApp')
.factory('Locations', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve([
          {name: '', address: '', description: ''},
          {name: '', address: '', description: ''},
          {name: '', address: '', description: ''},
        ]);
      });
    },
  };
});
