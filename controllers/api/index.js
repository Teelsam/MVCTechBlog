const router = require('express').Router();
const blogRoute = require('./blogRoutes');
const commentRoute = require('./commentRoutes');
const userRoute = require('./userRoutes');
//pulls in routes

router.use('/blog', blogRoute);//guides router to blog content
router.use('/comment', commentRoute);//guides router to comment content
router.use('/users', userRoute);//guides router to user content

module.exports = router;