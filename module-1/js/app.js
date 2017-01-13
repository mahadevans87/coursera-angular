(function () {
'use strict';

angular.module("LunchChecker", []).controller ("TooMuchFoodController", TooMuchFoodController);

TooMuchFoodController.$inject = ["$scope", "$filter"]; 
function TooMuchFoodController ($scope, $filter) {
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.checkAppetite = function () {
        var count = 0;
        var items = $scope.lunchItems.split(",");
        for (var item in items) {
            if (items[item].trim() != '') {
                count++;
            }
        }
        if (count == 0) {
            $scope.message = "Please enter data first"
        }
        else if (count < 4) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }

        $scope.lunchItems = "";
    }
    
    
}
})();