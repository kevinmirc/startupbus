angular.module('sampleApp')
.factory('People', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve([
          { firstName: 'Kevin', lastName: 'Mircovich', title: 'Conductor', phone: '(727) 678-5785', email: 'kmircovich1@gmail.com', color: '#3DDB93', city: 'St. Petersburg, FL' },
          { firstName: 'Brent', lastName: 'Henderson', title: 'Conductor', phone: '(727) 434-2130', email: 'bhenderson3690@gmail.com ', color: '#E44444', city: 'Orlando, FL' },
          { firstName: 'Ray', lastName: 'Land', title: 'Literal Conductor', color: '#EF8D2E', city: 'Gainsville, FL' },
        ]);
      });
    }
  };
});
