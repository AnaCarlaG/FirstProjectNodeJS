const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const connectionDB = require('./app/config/db')
const mongoose = require('mongoose');

const app = express();
//inicialize routes
app.use('/api',require('./app/routes/note_routes'));

app.use(bodyParser.json());

const port = 8000;

connectionDB();
mongoose.Promise = global.Promise;


//app.use(bodyParser.urlencoded({ extended: true }))


app.listen(process.env.port || port, () => {
    console.log("We r live on " + port);
})

// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err)
//     require('./app/routes')(app,database);
//     app.listen(port,() => {
//         console.log("We r live on "+port)
//     })
// })