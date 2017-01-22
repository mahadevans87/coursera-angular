(function () {
'use strict';

angular.module('restaurant')
  .service('UserPreferencesService', UserPreferencesService);

function UserPreferencesService() {
  var service = this;

  service.userPrefs = {};

  service.saveUserInfo = function (userPrefs) {
    service.userPrefs = userPrefs;  
    console.log("User Prefs saved: " + service.userPrefs);
  }
}

})();