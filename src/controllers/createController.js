const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;

    try {
        await movieService.create(newMovie);
        res.redirect('/');
    } catch (err) {
        res.status(400).end();
        res.redirect('/create');
    }
});

router.get('/details/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movieService.getOne(movieId);

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details', { movie });
});

module.exports = router;