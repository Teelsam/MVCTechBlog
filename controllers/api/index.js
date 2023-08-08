const router = require('express').Router();
const blogRoute = require('./blogRoutes');
const commentRoute = require('./commentRoutes');
const userRoute = require('./userRoutes');

router.use('/blog', blogRoute);
router.use('/comment', commentRoute);
router.use('/users', userRoute);

module.exports = router;