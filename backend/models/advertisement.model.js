const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Advertisement = new Schema({
    Name:{type: String, required:true},
    Location:{type: String, required:true},
    CreatedBy:{type:String,required:true},
    Email:{type: String, required:true},
    Website:{type: String, required:true},
    AdvertisementLink: {type: String, required:true},
    AdvertisementURL: {type: String, required:true},
    Description: {type: String, required:true},
    AdvertisementPeriod: {type: String, required:true},
    StartDate: {type: Date, required:true},
    EndDate: {type: Date, required:true},
    Payment: {type: String, required:true},
    TotalAdvertisementView: {type: Number, required:true},
    TotalClickOnAdvertisement: {type: Number, required:true}
});

module.exports = mongoose.model('Advertisement',Advertisement);
