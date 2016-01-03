'use strict';

angular.module('yoMovieApp')
  .controller('MoviesCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {


    console.log($state)



    $scope.films = '';
    $scope.err = ''

    $http.get('api/movies/getRecommendations?title=%27' + $state.params.movieName + '%27')
      .success(function(data) {
        $scope.films = data;
        console.log("search", $scope.films);
if($scope.films.length === 0){
  $scope.err = 'No Movie Recommendations Found';
}

      })

    .catch(function(err) {
       $scope.err = 'No Movie Recommendations Found';
      console.log('Error: ' + err);
    })








  }])
