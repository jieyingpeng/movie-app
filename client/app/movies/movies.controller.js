'use strict';

angular.module('yoMovieApp')
  .controller('MoviesCtrl', ['$scope', 'Auth', '$state', '$http', function($scope, Auth, $state, $http) {

    $scope.films = '';
    $scope.err = ''

    $http.get('api/movies/getRecommendations?title=%27' + $state.params.movieName + '%27')
      .success(function(data) {
        $scope.films = data;
        console.log("search", $scope.films);
        if ($scope.films.length === 0) {
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

// http://www.omdbapi.com/?t=the+notebook&tomatoes=true&plot=full





  }])
