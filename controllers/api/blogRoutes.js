const router = require('express').Router();
const { Blog } = require('../../models/Blog');
const auth = require('../../utils/auth');


router.post('/', auth, async (req, res) => { // creates a blog post
    try {
        const createBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,

        });
        res.status(200).json(createBlog);
    } catch (err) {
        res.status(400).json(err);
    }

})
router.delete('/:id', auth, async (req, res) => {//deletes a blog post
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!deleteBlog) {
            res.status(404).json({ message: 'No Blog matches that id' });
            return;
        }
        res.status(200).json(deleteBlog);
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;
