(function () {
'use strict';

angular.module('restaurant')
  .controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserPreferencesService'];
function SignupController(MenuService, UserPreferencesService) {
  var controller = this;
  
  controller.isMenuItemValid = true;
  controller.success = false;

  controller.submit = function () {
    controller.isMenuItemValid = true;
    controller.success = false;
    console.log(controller.userPrefs);
    var promise = MenuService.getMenuItem(controller.userPrefs.favDishId);
    promise.then(function (response) {
      if (response == null) {
        controller.userPrefs.favDishId = null;
        controller.userPrefs.dishName = null;
        controller.userPrefs.dishDescription = null;
        controller.isMenuItemValid = false;
      } else {
        controller.userPrefs.dishName = response.name;
        controller.userPrefs.dishDescription = response.description;
        UserPreferencesService.saveUserInfo(controller.userPrefs);
        controller.success = true;
      }
    }).catch(function (error) {
      controller.isMenuItemValid = false;
    })
  }

  
}

})();