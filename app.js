const express = require('express')
// const ejs = require('ejs')
const app = express()
const port = 3000
const host = 'http://localhost'
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    tittle = 'Home Page'
    res.render('index', { tittle })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
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
    res.render('contact', { contact })
})
app.get('/drinks/:minuman', (req, res) => {
    res.send(
        'Minuman = ' + req.params.minuman
    )
})
app.get('/drinks', (req, res) => {
    res.send(
        'Minuman = ' + req.query.drink +
        '<br><br>' +
        'Keterangan = ' + req.query.description
    )
})
app.post('/drinks', urlencodedParser, (req, res) => {
    res.send(
        'Minuman = ' + req.body.drink +
        '<br><br>' +
        'Keterangan = ' + req.body.description
    )
})
app.use('/', (req, res) => {
    res.status(404)
    res.render('error')
})
app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
})