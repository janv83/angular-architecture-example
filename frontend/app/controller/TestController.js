MovieDB.App.controller('TestController', function($scope, Movies) {
	$scope.movies = (function() {
        var movies = [];
        for(var i = 0; i < 100; i++) {
            movies.push({
                name: 'Foo ' + i,
                year: 1950 + i
            });
        }

        return movies;
    })();
});