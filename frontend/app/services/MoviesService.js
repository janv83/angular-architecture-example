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
            ]
        },
		{
			name: 'Fear and Loathing in Las Vegas',
			year: '1998',
			rating: 4,
			tags: [
				{ name: 'Adventure' },
				{ name: 'Comedy' }
			]
		}
    ];

    return {
        getAll: function() {
            return movies;
        }
    };
});