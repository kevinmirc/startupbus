angular.module('sampleApp')
.factory('Sponsors', function ($q) {
  return {
    getAll: function () {
      return $q(function (resolve, reject) {
        resolve([
          {
            name: 'Hillsborough County',
            website: 'https://www.hillsboroughcounty.org',
            imageName: 'hc_ed.pdf',
            facebook: {label: 'HillsboroughFL', link: 'https://www.facebook.com/HillsboroughFL/'},
            twitter: {label: '@HillsboroughFL', link: 'https://twitter.com/HillsboroughFL'},
            instagram: {label: 'hillsboroughfl', link: 'https://www.instagram.com/hillsboroughfl/'},
          },
          {
            name: 'Big Sea',
            website: 'https://bigseadesign.com/',
            imageName: 'bigsea',
            facebook: {label: 'BigSeaInc', link: 'https://www.facebook.com/BigSeaInc'},
            twitter: {label: '@bigsea', link: 'https://twitter.com/bigsea'},
            instagram: {label: 'bigsea', link: 'https://www.instagram.com/bigsea/'},
          }
        ]);
      });
    },
  };
});
