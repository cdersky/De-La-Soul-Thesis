// goals:
// 2. Search Bar
// - view --
// -- 3 input forms
// -- search button
// -- queried location ($scope.location)
// - controller --
// -- $scope elements for each input 
// ---- $scope.location
// ---- $scope.startDate
// ---- $scope.endDate
// ---- $scope.clickFxn (calls the service Fxn)
// - services --
// ---- HTTP GET
// ------- eventbrite API info (send)
// ------- On success, store and parse data 

angular.module('soundGlomerate.searchFactory', [])

.factory('Search', ['$http', function($http){

  console.log('this : ', this, ', $http : ', $http);

  var sendAPIQuery = function(){

  };
  var example = {};
  return example;

}]);











