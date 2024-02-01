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

router.get('/details/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await movieService.getOne(movieId).lean();

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details', { movie });
});

router.get('/attach/cast/:id', (req, res) => {
    res.render('cast-attach');
});

module.exports = router;