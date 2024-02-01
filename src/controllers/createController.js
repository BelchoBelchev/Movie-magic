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
    const casts = await castService.getByIds(movie.casts).lean();

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details', { movie, casts });
});

router.get('/attach/cast/:id', async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    const casts = await castService.getAll().lean();

    res.render('cast-attach', { movie, casts });
});

router.post('/attach/cast/:id', async (req, res) => {
    const castId = req.body.cast;
    const movie = await movieService.getOne(req.params.id);

    movie.casts.push(castId);

    await movie.save();

    res.redirect('/');
});

module.exports = router;