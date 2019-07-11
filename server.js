require('dotenv').config();
require('./server/db-conn');
const express = require('express');
const  bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//give server access to static files generated at yarn build in client
app.use(express.static('./client/first_azure_app/build'));



// mount routes
app.use('/api/thoughts/', require('./server/routes/thoughts-routes'));

//get route for server.js to serve index.html to clients
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/client/first_azure_app/build/' });
});


const {PORT} = process.env;
app.listen(PORT, () => console.log('Wizardry happening over on port ${PORT}'));

