const router = require('express').Router();
// const sequalize = require('../config/connection');
const { User } = require('../models');

const auth = require('../utils/auth');


router.get('/', async (req, res) => {//renders the homepage if user is logged in
    res.render('homepage', {
        logged_in: req.session.logged_in,
    });
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;


