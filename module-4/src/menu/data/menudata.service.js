(function () {
'use strict';

angular.module("data")
  .service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http"];
function MenuDataService($http) {

  var service = this;

  service.getAllCategories = function () {
    var promise = $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json',
    }).then(function success(response) {
      return response.data;
    }).catch(function error(response) {
      return [];
    });
    return promise;
  }

  service.getItemForCategory = function (itemId) {
    var promise = $http({
      method: 'GET',
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + itemId)
    }).then(function success(response) {
      return response.data;
    }).catch(function failure(response) {
      return [];
    });

    return promise;
  }
}

})();