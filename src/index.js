const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = 5500;

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.listen(PORT, () => {
    console.log(`Server is listenig on port ${PORT}`);
});