const Movie = require('../models/Movie');

const movies = [{
    _id: 1,
    title: 'Jungle Cruise',
    genre: 'Adventure',
    director: 'Belcho Belchev',
    year: '2024',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: 4,
    description: 'Jungle action/comedy'
}];

exports.getAll = () => {
    return movies.slice();
};

exports.getOne = (id) => {
    return movies.find(movie => movie._id == id);
}

exports.search = (title, genre, year) => {
    let search = movies.slice();

    if (title) {
        search = search.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    if (genre) {
        search = search.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
    }

    if (year) {
        search = search.filter(movie => movie.year === year);
    }

    return search;

};

exports.create = async (movieData) => {
    const result = await Movie.create(movieData);
    return result;
}; 