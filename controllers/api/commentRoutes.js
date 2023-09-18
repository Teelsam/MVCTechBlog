const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => { //creates a comment
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router; 