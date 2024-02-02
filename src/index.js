const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = 5500;
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(routes);

mongoose.connect(`mongodb://localhost:27017/movies`)
    .then(() => {
        console.log('DB Connected');
        app.listen(PORT, () => {
            console.log(`Server is listenig on port ${PORT}`);
        });
    });

