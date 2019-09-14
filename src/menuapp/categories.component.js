(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/temp/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
