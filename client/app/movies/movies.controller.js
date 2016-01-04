'use strict';

angular.module('yoMovieApp')
  .controller('MoviesCtrl', ['$scope', 'Auth', '$state', '$http', function($scope, Auth, $state, $http) {

    $scope.movies = '';
    $scope.err = ''

    $http.get('api/movies/getRecommendations?title=%27' + $state.params.movieName + '%27')
      .success(function(data) {
        $scope.movies = data;
        console.log("search", $scope.movies);
        if ($scope.movies.length === 0) {
          $scope.err = 'No Movie Recommendations Found';
        }

      })
      .catch(function(err) {
        $scope.err = 'No Movie Recommendations Found';
        console.log('Error: ' + err);
      })


    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.list = function(movie) {
      movie.user_id = $scope.getCurrentUser()._id;
      if (Auth.isLoggedIn() === false) {
        $state.go('login');
      } else {

        $http.post('/api/movies', movie)
          .success(function(data) {

            console.log(data);

          })
          .error(function(data) {

            console.log('Error: ' + data);
          });
      }
    }






  }])
