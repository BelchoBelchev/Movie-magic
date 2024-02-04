const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async (req, res) => {

    const movies = await movieService.getAll().lean();
    const isAuthenticated = !!req.user;
    res.render('home', { movies, isAuthenticated });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;