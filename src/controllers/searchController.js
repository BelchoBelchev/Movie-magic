const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/search', (req, res) => {
    const { title, genre, year } = req.query;
    const movies = movieService.search(title, genre, year);

    res.render('search', { movies });
});

module.exports = router;