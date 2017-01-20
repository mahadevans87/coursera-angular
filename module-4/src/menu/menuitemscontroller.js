(function(){
'use strict';

angular.module("MenuApp")
  .controller("MenuItemsController", MenuItemsController);

MenuItemsController.$inject = ["$stateParams", "items"];
function MenuItemsController($stateParams, items) {
  var ctrl = this;
  ctrl.items = items;
  console.log($stateParams.shortName);
  console.log(items.menu_items);
}

})();