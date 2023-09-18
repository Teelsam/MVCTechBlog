const auth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};
//checks to see if the client is logged in
module.exports = auth;
