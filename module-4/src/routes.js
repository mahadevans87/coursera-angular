(function () {
'use strict';

angular.module("MenuApp")
  .config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "src/menu/templates/home.template.html"
  })

  .state("categories", {
    url: "/categories",
    templateUrl: "src/menu/templates/menucategories.template.html",
    controller: "MenuCategoriesController as ctrlCategories",
    resolve : {
      items: ["MenuDataService", function(MenuDataService){
        var categories = MenuDataService.getAllCategories();
        console.log(categories);
        return categories;
      }]
    }
  })

  .state("item-list", {
    url: "/item-list/{shortName}",
    templateUrl: "src/menu/templates/menuitems.template.html",
    controller: "MenuItemsController as ctrlMenuItems",
    resolve: {
      items: ["$stateParams", "MenuDataService", function ($stateParams, MenuDataService) {
        var items = MenuDataService.getItemForCategory($stateParams.shortName);
        return items;
      }]
    }

  });

}  
})();