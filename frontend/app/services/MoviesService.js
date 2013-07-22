MovieDB.App.factory('Movies', function($http, $rootScope) {

    var movies = [
        {
            name: 'Pulp Fiction',
            year: '1994',
            rating: '9.0',
            tags: [
                { name: 'Crime' },
                { name: 'Drama' },
                { name: 'Thriller' }
            ]
        }
    ];

    return {
        getAll: function() {
            return movies;
        }
    };
});