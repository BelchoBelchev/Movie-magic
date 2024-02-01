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
    nameInMovie: {
        type: String,
        required: true,

    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?/,
    }
});

const Cast = mongoose.model('Cast', castSchema);
module.exports = Cast;