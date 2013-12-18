MovieDB.App.controller('MovieViewController', function($scope, Movies, $routeParams) {
    $scope.movie = Movies.getById($routeParams.id);
});