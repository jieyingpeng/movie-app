'use strict';

angular.module('yoMovieApp')
  .controller('MainController', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {

    $scope.films = '';
    $scope.getMovies = function(movieName) {
      $http.get('api/movies/getRecommendations?title=%27' + movieName + '%27')
        .success(function(data) {
          $scope.films = data;
          console.log("search", $scope.films);
          $stateParams.movieName = movieName
        })
        .then(function() {
          $state.go('movies', $stateParams)
        })
        .catch(function(err) {
          console.log('Error: ' + err);
        })



    }





  }])
