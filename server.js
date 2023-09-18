const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//require all packages

const SequelizeStore = require('connect-session-sequelize')(session.Store); //set up sequalize stored data.


const sess = {//sequalize specifics
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


const app = express();//activates express.js
const PORT = process.env.PORT || 3001;//sets port options
const hbs = exphbs.create();
//tells app which packages to interact with.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {//prints the port server is on
    app.listen(PORT, () => console.log('Now listening'));
});
