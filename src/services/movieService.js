const Movie = require('../models/Movie');

exports.getAll = () => {
    const movies = Movie.find();
    return movies;
};

exports.getOne = (id) => {
    const movie = Movie.findById(id).populate('casts');
    return movie;
}

exports.search = (title, genre, year) => {
    let query = Movie.find();

    if (title) {
        query = query.find({ title: new RegExp(title, 'i') });
    }

    if (genre) {
        query = query.find({ genre: genre.toLowerCase() });
    }

    if (year) {
        query = query.find({ year });
    }

    return query;

};

exports.create = async (movieData) => {
    const result = await Movie.create(movieData);
    return result;
};

exports.delete = async (id) => {
    await Movie.findByIdAndDelete(id);
}