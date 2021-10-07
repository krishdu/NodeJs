const express = require('express');
const logger = require('morgan');
const homeRouter = require('./router/homeRouter');
const app = express();

const PORT  = process.env.PORT || 8000;

app.use(logger('tiny'));
//set a view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.use('/static', express.static('public'))

app.use('/', homeRouter);

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, (err) => {
    if(err) console.error(err);
    console.log(`listening on port http://localhost:${PORT}`);
});