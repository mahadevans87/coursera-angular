(function () {
'use strict';
angular.module("ShoppingCartApp", [])
 .controller("ToBuyController", ToBuyController)
 .controller("AlreadyBoughtController", AlreadyBoughtController)
 .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {

    var self = this;
    
    self.items = ShoppingListCheckOffService.getToBuyItems();

    self.buyItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
    var self = this;
    self.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}


function ShoppingListCheckOffService() {
    var service = this;

    var alreadyBoughtItems = [];

    var toBuyItems = [
            {
                name : "cookies",
                quantity : 10
            },
            {
                name : "Pepto Bismol",
                quantity : 20
            },
            {
                name : "Rice bags",
                quantity : 2
            },
            {
                name : "Veggies",
                quantity : 20
            },
            {
                name : "Milk bottles",
                quantity : 4
            },
            {
                name : "Beer bottles",
                quantity : 100
            }
        ];
    
    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    };

    service.buyItem = function(index) {
        var item = toBuyItems[index];
        alreadyBoughtItems.push(item);
        toBuyItems.splice(toBuyItems.indexOf(item), 1);
    }
}

})();