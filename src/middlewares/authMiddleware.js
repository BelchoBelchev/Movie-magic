const jwt = require('../lib/jsonWebToken');
const { secret } = require('../config/config');

exports.auth = async (req, res, next) => {

    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {

        const decodedToken = await jwt.verify(token, secret);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();

    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/login');
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login');
    }

    next();
};