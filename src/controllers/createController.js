const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const newMovie = req.body;
    newMovie.owner = req.user._id;

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
    const isCreator = movie.owner == req.user?._id;

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details', { movie, isCreator });
});

router.get('/attach/cast/:id', isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    const casts = await castService.getAll().lean();

    res.render('cast-attach', { movie, casts });
});

router.post('/attach/cast/:id', isAuth, async (req, res) => {
    const castId = req.body.cast;
    const movie = await movieService.getOne(req.params.id);

    movie.casts.push(castId);

    await movie.save();

    res.redirect('/');
});

router.get('/edit/:id', isAuth, async (req, res) => {

    if (!req.user) {
        return res.redirect('/login');
    }

    const movie = await movieService.getOne(req.params.id).lean();
    res.render('edit', { movie });
});



module.exports = router;