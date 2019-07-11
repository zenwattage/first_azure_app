//file for connecting to azure cosmos DB 

const mongoose = require('mongoose');

const { DB_CONN, DB_USER, DB_PW} = process.env;

mongoose
    .connect(
        DB_CONN,
        { auth: { user: DB_USER, password: DB_PW},
            useNewUrlParser: false },
        )
    .then( () => console.log('DB connection spell sucessfully cast!...'))
    .catch(console.error);