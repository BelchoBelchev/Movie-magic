const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/search', (req, res) => {

    const movies = movieService.getAll();

    res.render('search', { movies });
});

module.exports = router;