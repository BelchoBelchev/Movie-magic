const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/edit/:id', async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    
    res.render('edit', { movie });
});

module.exports = router;