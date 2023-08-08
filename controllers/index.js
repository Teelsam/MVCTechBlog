const router = require('express').Router();
const homePage = require('./homeRoutes');
const apiRoute = require('./api');

router.use('/', homePage);
router.use('/api', apiRoute);















module.exports = router;
