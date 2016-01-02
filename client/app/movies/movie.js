angular.module('movieApp.movies', ['movieApp.services'])

.controller('MovieController', function($scope, $http, Search, Movies) {
  $scope.films = {}; //list of films returned
  $scope.searchString = '';

  $scope.getMovies = function(searchString) {
    Search.getMovies(searchString)
      .then(function(data) {
        $scope.films = data;
        console.log("search", data);
      })

  };

  $scope.list = function(movie) {
    Movies.list(movie)
  }
})

.factory('Movies', function() {
  var watchList = [];
  var list = function(movie) {
    watchList.push(movie)
  }
  return {
    watchList: watchList,
    list: list
  }
})
