const router = require('express').Router();

const castService = require('../services/castService');

router.get('/create/cast', (req, res) => {
    res.render('cast-create');
});

router.post('/create/cast', async (req, res) => {
    const newCast = req.body;

    await castService.create(newCast);
    res.redirect('/');

});

module.exports = router;