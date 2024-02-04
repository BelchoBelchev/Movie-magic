const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonWebToken');
const { secret } = require('../config/config');

exports.register = (userData) => {
    User.create(userData);
};

exports.login = async (email, password) => {
    // Get user from DB
    const user = await User.findOne({ email });
    // Check if user exists
    if (!user) {
        throw new Error('Cannot find username or password!');
    }
    // Check for valid password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Cannot find username or password!');
    }
    // Generate token
    const payload = {
        _id: user.id,
        email: user.email,
    }
    const token = await jwt.sign(payload, secret, { expiresIn: '1h' });

    // Return token

    return token;
};