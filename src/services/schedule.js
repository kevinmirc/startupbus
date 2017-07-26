angular.module('sampleApp')
.factory('Schedule', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve({
          'Pre-Launch (July 29)': [
            {startTime: '6:30pm EDT', endTime: '8:00pm EDT', description: 'Launch Party', address: '333 S Franklin St, Tampa, FL 33602', locationName: 'Sail Pavilion @ Tampa Convention Center', icon: 'local_bar'},
          ],
          'Day 1 (July 31)': [
            {startTime: '6:30am EDT', endTime: '7:00am EDT', description: 'Boarding in Tampa', address: '333 S Franklin St, Tampa, FL 33602', locationName: 'Tampa Convention Center'},
            {startTime: '7:00am EDT', endTime: '11:40am EDT', description: 'Drive to Jacksonville', address: null, icon: 'directions_bus'},
            {startTime: '11:40am EDT', endTime: '1:00pm EDT', description: 'Lunch', address: 'location tbd', icon: 'restaurant'},
            {startTime: '1:00pm EDT', endTime: '1:30pm EDT', description: 'Boarding', address: null},
            {startTime: '1:30pm EDT', endTime: '4:15pm EDT', description: 'Drive to Savannah, GA', address: null, icon: 'directions_bus'},
            {startTime: '4:15pm EDT', endTime: '6:45pm EDT', description: 'Dinner & Work', address: 'location tbd', icon: 'restaurant'},
            {startTime: '6:45pm EDT', endTime: '7:00pm EDT', description: 'Boarding', address: null},
            {startTime: '7:00pm EDT', endTime: '10:00pm EDT', description: 'Drive to Columbia, SC', address: null, icon: 'directions_bus'},
            {startTime: '10:00pm EDT', endTime: '10:30pm EDT', description: 'Hotel Check In', address: '750 Saturn Pkwy Columbia, SC 29212', icon: 'local_hotel'},
          ],
          'Day 2 (August 1)': [
            {startTime: '7:00am EDT', endTime: '8:00am EDT', description: 'Hotel Checkout & Boarding', address: '750 Saturn Pkwy Columbia, SC 29212', icon: 'local_hotel'},
            {startTime: '8:00am EDT', endTime: '10:00am EDT', description: 'Drive to Charlotte', address: null, icon: 'directions_bus'},
            {startTime: '10:00am EDT', endTime: '12:00pm EDT', description: 'Lunch & Pitches', address: '933 Louise Ave #101, Charlotte, NC 28204', locationName: 'Advent Coworking', icon: 'restaurant whatshot'},
            {startTime: '12:00am EDT', endTime: '2:00pm EDT', description: 'Meet Charlotte Startup Folks', address: '212 S Green St, Morganton, NC 28655', locationName: 'Catawba Brewing Company', icon: 'whatshot'},
            {startTime: '2:00pm EDT', endTime: '2:30pm EDT', description: 'Boarding', address: null},
            {startTime: '2:30pm EDT', endTime: '6:45pm EDT', description: 'Drive to Knoxville', address: null, icon: 'directions_bus'},
            {startTime: '6:45pm EDT', endTime: '8:00pm EDT', description: 'Dinner & Work', address: null, icon: 'restaurant'},
            {startTime: '8:00pm EDT', endTime: '11:00pm EDT', description: 'Drive to Nashville', address: null, icon: 'directions_bus'},
            {startTime: '11:00pm EDT', endTime: '11:30pm EDT', description: 'Hotel Check In', address: '177 1st Ave N. Nashville, TN 37201', locationName: 'Nashville Downtown Hostel', icon: 'local_hotel'},
          ],
          'Day 3 (August 2)': [
            {startTime: 'time tbd', endTime: 'time tbd', description: 'Hotel Checkout & Boarding', address: '177 1st Ave N. Nashville, TN 37201', locationName: 'Nashville Downtown Hostel', icon: 'local_hotel'},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Boarding', address: null},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Boarding', address: null},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Drive to Birmingham', address: null, icon: 'directions_bus'},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Boarding', address: null, icon: 'directions_bus'},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Drive to Meridian', address: null, icon: 'directions_bus'},
            // {startTime: 'time tbd', endTime: 'time tbd', description: 'Boarding', address: null},
            {startTime: 'time tbd', endTime: 'time tbd', description: 'Drive to New Orleans', address: null, icon: 'directions_bus'},
            {startTime: 'time tbd', endTime: 'time tbd', description: 'Hotel Check In', address: '2001 St Charles Ave New Orleans, LA 70130', locationName: 'Clarion Hotel Grand Boutique', icon: 'local_hotel'},
          ],
          'Day 4 (August 3)': [
            {startTime: '7:00am CDT', endTime: '6:00pm CDT', description: 'StartupBus North America Finals', address: null, icon: 'whatshot'},
          ],
          'Day 5 (August 4)': [
            {startTime: '7:00am CDT', endTime: '6:00pm CDT', description: 'StartupBus North America Finals', address: null, icon: 'whatshot'},
          ]
        });
      });
    },
  };
});
