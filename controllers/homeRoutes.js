const router = require('express').Router();
// const sequalize = require('../config/connection');
const { User } = require('../models');

const auth = require('../utils/auth');


router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', auth, async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;

// try {
//     const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']],
//     });
//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//         users,
//         logged_in: req.session.logged_in,
//     });
// } catch (err) {
//     res.status(500).json(err);
