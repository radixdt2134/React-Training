var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


function Connectmongoose() {
    mongoose.connect('mongodb://localhost:27017/Bankingdb', { useUnifiedTopology: true, useNewUrlParser: true,  useFindAndModify: false, useCreateIndex : true })
        .then(() => console.log("Connected Bankingdb..."))
        .catch(err => console.log("could not connected.... ", err))
}

module.exports.Connectmongoose = Connectmongoose;