const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KeyValidation = new Schema({
    Key:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('KeyValidation',KeyValidation);

