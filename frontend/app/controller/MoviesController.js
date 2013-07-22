MovieDB.Controller.MoviesController = function($scope, Movies) {
    $scope.movies = Movies.getAll();
};