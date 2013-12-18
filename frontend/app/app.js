MovieDB.App.config(['$routeProvider', function($routeProvider) {
	/**
	 * Routes
	 */
	$routeProvider.
		when('/', {
			templateUrl: MovieDB.Config.templateUrl + 'movies.html',
			controller: 'MoviesController'
		}).
        when('/movie/:id', {
            templateUrl: MovieDB.Config.templateUrl + 'movie_view.html',
            controller: 'MovieViewController'
        }).
		otherwise({redirectTo: '/'});
	}
]);

MovieDB.App.run([function () {
	// initialise the app
}]);