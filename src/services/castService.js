const Cast = require('../models/Cast');

exports.create = (castData) => {
    const result = Cast.create(castData);
    return result;
};