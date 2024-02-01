const Cast = require('../models/Cast');

exports.create = (castData) => {
    const result = Cast.create(castData);
    return result;
};

exports.getAll = () => {
    const result = Cast.find();
    return result;
}

//exports.getByIds = (castIds) => {
    //const casts = Cast.find({ _id: { $in: castIds } });

    //return casts;
//};