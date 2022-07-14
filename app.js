const express = require('express')
const app = express()
const port = 3000
const host = 'http://localhost'
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var expressLayouts = require('express-ejs-layouts');

// Set ejs
app.set('view engine', 'ejs');
// Use express-ejs
app.use(expressLayouts);
// Set express-ejs
app.set('layout', 'layouts/main');
// Page Home
app.get('/', (req, res) => {
    tittle = 'Home Page'
    res.render('index', { tittle })
})
// Page About
app.get('/about', (req, res) => {
    tittle = 'About Page'
    res.render('about', { tittle })
})
// Page Contact
app.get('/contact', (req, res) => {
    tittle = 'Contact Page'
    const contact = [
        // {
        //     name: 'daffa',
        //     email: 'daffaraihan03@gmail.com'
        // },
        // {
        //     name: 'jupri',
        //     email: 'jupriraihan03@gmail.com'
        // },
        // {
        //     name: 'ucup',
        //     email: 'ucupraihan03@gmail.com'
        // },
    ]
    res.render('contact', { tittle, contact })
})
// Page Drinks params
app.get('/drinks/:minuman', (req, res) => {
    res.send(
        'Minuman = ' + req.params.minuman
    )
})
// Page Drinks Get Method
app.get('/drinks', (req, res) => {
    res.send(
        'Minuman = ' + req.query.drink +
        '<br><br>' +
        'Keterangan = ' + req.query.description
    )
})
// Page Drinks Post Method
app.post('/drinks', urlencodedParser, (req, res) => {
    res.send(
        'Minuman = ' + req.body.drink +
        '<br><br>' +
        'Keterangan = ' + req.body.description
    )
})
// Page Error
app.use('/', (req, res) => {
    res.status(404)
    res.render('error')
})
// Listen Server
app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
})