const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Belcho Belchev',
    year: '2024',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '4',
    description: 'Jungle action/comedy'
}];

exports.getAll = () => {
    return movies.slice();
};

exports.getOne = (id) => {
    return movies.find(movie => movie._id == id);
}

exports.create = (movieData) => {

    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
}; 