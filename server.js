require('dotenv').config();
const express = require('express');
const  bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//get route for server.js to serve index.html to clients
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


const {PORT} = process.env;
app.listen(PORT, () => console.log('Wizardry happening over on port ${PORT}'));

