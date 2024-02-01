const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');

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

router.get('/attach/cast/:id', async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    const casts = await castService.getAll().lean();

    res.render('cast-attach', { movie, casts });
});

router.post('/attach/cast/:id', (req, res) => {

});

module.exports = router;