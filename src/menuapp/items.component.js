(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/temp/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
