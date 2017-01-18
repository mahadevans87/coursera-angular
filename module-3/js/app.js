(function () {
'use strict';

angular.module("NarrowItDownApp", [])
  .controller ("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", foundItemsDirective);

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'found_items.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    transclude: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
  var self = this;

  self.currentSearchTerm = "";
  self.foundItems = [];
  self.nothingFound = false;

  self.searchItems = function () {
    self.nothingFound = false;
    if (self.currentSearchTerm === "") {
      self.nothingFound = true;
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(self.currentSearchTerm);
    promise.then(function (response) {
    self.foundItems = response.items;
    self.nothingFound = (self.foundItems.length == 0)
    }).catch(function(response) {
      console.log("something went wrong!");
      self.nothingFound = true;
    });
  }

  self.removeItem = function(index) {
    self.foundItems.splice(index, 1);
  }
}

MenuSearchService.$inject = ["$http", "$q"];
function MenuSearchService($http, $q) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var deferred = $q.defer();
    var result = {
      items : [],
      error : ""
    };

    var response = $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    });

    response.then(function (response) {
      var allItems = response.data.menu_items;
      
      result.items = allItems.filter(function (item) {
        return (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      });

      deferred.resolve(result);
    }).catch(function (response) {
      result.error = "Something went terribly wrong!";
      deferred.reject(result);
    });

return deferred.promise;
  }
}

})();