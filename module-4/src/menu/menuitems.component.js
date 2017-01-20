(function(){
'use strict';

angular.module("MenuApp")
  .component("menuItems",{
    templateUrl: "src/menu/templates/items.template.html",
    bindings: {
      items : '<'
    }
  });
})();