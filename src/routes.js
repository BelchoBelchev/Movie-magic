const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const searchController = require('./controllers/searchController');
const createCastController = require('./controllers/createCastController');

router.use(homeController);
router.use(createController);
router.use(searchController);
router.use(createCastController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;