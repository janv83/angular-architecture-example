MovieDB.App = angular.module('MovieDB', [], function() {

});

MovieDB.App.config(['$routeProvider', function($routeProvider) {
	/**
	 * Routes
	 */
	$routeProvider.
		when('/', {
			templateUrl: MovieDB.Config.templateUrl + 'movies.html',
			controller: MovieDB.Controller.MoviesController
		}).
		otherwise({redirectTo: '/'});
	}
]);

MovieDB.App.run([function () {
	// initialise the app
}]);