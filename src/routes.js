const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const searchController = require('./controllers/searchController');

router.use(homeController);
router.use(createController);
router.use(searchController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;