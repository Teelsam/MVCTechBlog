const router = require('express').Router();
// const sequalize = require('../config/connection');
const { User } = require('../models');

const auth = require('../utils/auth');


router.get('/', async (req, res) => {
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


// Every single handlebars page will need a Homeroute and if theres interaction itll need a js file. I still need a way to view a users collected posts. 