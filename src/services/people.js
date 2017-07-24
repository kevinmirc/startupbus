angular.module('sampleApp')
.factory('People', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve([
          { firstName: 'Kevin', lastName: 'Mircovich', color: '#3DDB93', city: 'St. Petersburg, FL' },
          { firstName: 'Brian', lastName: 'Mircovich', color: '#E44444', city: 'Palm Harbor, FL' },
          { firstName: 'Michael', lastName: 'Mircovich', color: '#EF8D2E', city: 'Seatle, WA' },
        ]);
      });
    },
  };
});
