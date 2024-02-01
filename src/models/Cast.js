const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60,
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovies: {
        type: String,
        required: true,

    },
    castImage: {
        type: String,
        required: true,
        match: /^https?/,
    }
});

const Cast = mongoose.model('Cast', castSchema);
module.exports = Cast;