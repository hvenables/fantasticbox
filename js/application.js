var fantasticBoxCo = angular.module('fantasticBoxCo', [])

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 65;
}])
