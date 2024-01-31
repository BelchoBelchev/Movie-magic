const Movie = require('../models/Movie');

exports.getAll = () => {
    const movies = Movie.find();
    return movies;
};

exports.getOne = (id) => {
    const movie = Movie.findById(id);
    return movie;
}

exports.search = (title, genre, year) => {
    let search = Movie.find();

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