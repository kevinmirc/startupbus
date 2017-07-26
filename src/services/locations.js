angular.module('sampleApp')
.factory('Locations', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve([
          {
            name: 'Tampa Convention Center',
            address: '333 S Franklin St, Tampa, FL 33602',
            description: 'This is where we\'ll be departing from on July 31. BE ON TIME!',
            imageName: 'tampa-convention-center'
          },
          {
            name: 'Hotel in Columbia, SC',
            address: '',
            description: 'Hotel we\'ll  be staying at in Columbia, SC',
            imageName: 'tampa-convention-center'
          },
          {
            name: 'Advent Coworking',
            website: 'https://adventcoworking.com/',
            address: '933 Louise Ave #101, Charlotte, NC 28204',
            description: 'Advent Coworking will host us for breakfast/lunch and offer their space to work at.',
            imageName: 'advent'
          },
          {
            name: 'Catawba Brewing Company',
            website: 'catawbabrewing.com',
            address: '212 S Green St, Morganton, NC 28655',
            description: 'Always be Pitching!',
            imageName: 'catawba'
          },
          {
            name: 'Nashville Downtown Hostel',
            website: 'https://www.nashvilledowntownhostel.com',
            address: '177 1st Ave N, Nashville, TN 37201',
            description: 'We\'ll spend night number two at this amazing hostel.',
            imageName: 'catawba'
          },
          {
            name: 'Clarion Hotel Grand Boutique',
            website: 'https://www.choicehotels.com/louisiana/new-orleans/clarion-hotels/la087',
            address: '2001 St Charles Ave New Orleans, LA 70130',
            description: 'All of StartupBus North America at one location!',
            imageName: 'clarion'
          },
        ]);
      });
    },
  };
});
