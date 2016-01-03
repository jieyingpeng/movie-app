'use strict';

angular.module('yoMovieApp')
  .controller('MainController', ['$scope', function($scope) {

    $scope.getMovies = function(movieName) {
      $http.get('api/movies/getRecommendations?title=%27' + movieName + '%27')
        .success(function(data) {
          $scope.films = data;
          console.log("search", data);

        })
        .error(function(data) {

          console.log('Error: ' + data);
        });
    };


  }])
