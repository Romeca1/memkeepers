const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GiftSchema = new Schema({
    Name:{type: String, required:true},
    GiftLink: {type: String, required:true},
    Price: {type: String, required:true},
    Specification: {type: String, required:true},
    TotalItemSold: {type: Number, required:true},
});

module.exports = mongoose.model('Gift',GiftSchema);
