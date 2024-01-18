const movies = [{
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Belcho Belchev',
    year: '2024',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '4',
    description: 'Jungle action/comedy'
}];

exports.create = (movieData) => {
    movies.push(movieData);
    console.log(movieData);
}; 