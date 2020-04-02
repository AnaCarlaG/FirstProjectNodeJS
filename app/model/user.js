const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    sport: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

const note = mongoose.model('user',userSchema);

module.exports = note;
