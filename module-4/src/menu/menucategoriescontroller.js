(function () {
'use strict';

angular.module("MenuApp")
  .controller("MenuCategoriesController", MenuCategoriesController);

MenuCategoriesController.$inject = ["items"];
function MenuCategoriesController(items) {
  var ctrl = this;
  ctrl.items = items;
  console.log("From controller - " + ctrl.items);
}
})();