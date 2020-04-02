const mongoose = require('mongoose')

const URI = "mongodb+srv://AnaCarlaG:UeeBDpsvGBJP4tcm@systemnode-kretv.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    console.log('db connected..!');
}

module.exports = connectDB;