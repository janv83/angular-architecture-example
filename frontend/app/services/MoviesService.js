MovieDB.App.factory('Movies', function($http, $rootScope) {

    var movies = [
        {
            name: 'Pulp Fiction',
            year: '1994',
            rating: 4.5,
            tags: [
                { name: 'Crime' },
                { name: 'Drama' },
                { name: 'Thriller' }
            ],
            watched: 5
        },
		{
			name: 'Fear and Loathing in Las Vegas',
			year: '1998',
			rating: 4,
			tags: [
				{ name: 'Adventure' },
				{ name: 'Comedy' }
			],
            lastTimeWatched: +new Date(),
            watched: 1
		}
    ];

    return {
        getAll: function() {
            return movies;
        },
        getById: function(id) {
            return movies[id - 1];
        }
    };
});