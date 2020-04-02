const express = require('express')
const route = express.Router();
const User = require('../model/user')

//get some notes
route.get('/notes', function (req, res) {
    res.send({ type: 'GET' });
});

//create some new notes
route.post('/notes', function (req, res) {
    User.create(req.body).then(function(user){
           res.send(user);
    });
});

//update some post
route.put('/notes/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

//delete some note
route.delete('/notes/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = route;
// var ObjectID = require('mongodb').ObjectID

// module.exports = function (app, db) {
//     app.get('/notes/:id', (req, res) => {
//         const id = req.params.id
//         const details = {
//             '_id': new ObjectID(id)
//         };
//         db.collection('notes').findOne(details, (err, item) => {
//             if (err) {
//                 res.send({ 'error': 'An error has occured' })
//             } else {
//                 res.send(item)
//             }

//         });
//     });

//     app.delete('/notes/:id', (req, res) => {
//         const id = req.params.id
//         const details = {
//             '_id': new ObjectID(id)
//         };
//         db.collection('notes').remove(details, (err, item) => {
//             if (err) {
//                 res.send({ 'error': 'An error has occured' })
//             } else {
//                 res.send('Note' + id + 'deleted')
//             }
//         });
//     });

//     app.put('/notes/:id', (req, res) => {
//         const id = req.params.id
//         const details = {
//             '_id': new ObjectID(id)
//         };
//         const note = { text: req.body.body, title: req.body.title }
//         db.collection('notes').update(details, note, (err, item) => {
//             if (err) {
//                 res.send({ 'error': 'An error has occured' })
//             } else {
//                 res.send(item)
//             }

//         });
//     });

//     app.post('/notes', (req, res) => {
//         const note = { text: req.body.body, title: req.body.title };
//         db.collection('note').insert(note, (err, results) => {            
//             if (err) {
//                 res.send({ 'error': 'An error has occured' });
//             }
//             else {
//                 res.send(results.ops[0])
//             }
//         });
//     });
// };