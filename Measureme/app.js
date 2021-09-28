const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

const PORT  = process.env.PORT || 8000;

app.use(logger('tiny'));
//set a view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});