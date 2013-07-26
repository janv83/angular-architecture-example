MovieDB.App.config(['$routeProvider', function($routeProvider) {
	/**
	 * Routes
	 */
	$routeProvider.
		when('/', {
			templateUrl: MovieDB.Config.templateUrl + 'movies.html',
			controller: 'MoviesController'
		}).
        when('/test', {
			templateUrl: MovieDB.Config.templateUrl + 'test.html',
			controller: 'TestController'
		}).
		otherwise({redirectTo: '/'});
	}
]);

MovieDB.App.run([function () {
	// initialise the app
}]);