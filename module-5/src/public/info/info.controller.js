(function () {
'use strict';

angular.module("public")
  .controller("InfoController", InfoController);

InfoController.$inject = ['UserPreferencesService', 'ApiPath'];
function InfoController(UserPreferencesService, ApiPath) {
  var ctrl = this;
  
  ctrl.userPrefs = UserPreferencesService.userPrefs;  
  
  if (ctrl.userPrefs == null || ctrl.userPrefs.favDishId == null) {
    ctrl.userSignedUp = false;
  } else {
    ctrl.userSignedUp = true;
  }

  ctrl.basePath = ApiPath;
}

})();