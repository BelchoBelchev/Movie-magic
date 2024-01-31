const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/search', async (req, res) => {
    const { title, genre, year } = req.query;
    const movies = await movieService.search(title, genre, year);

    res.render('search', { movies });
});

module.exports = router;