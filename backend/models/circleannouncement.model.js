const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var AnnouncementSchema = new Schema({
    CreatedBy:{
        type:ObjectId,
        required:true
    },
    CreatedByName:{
        type:String,
        required:true
    },
    CircleURL:{
        type: String,
        required: true
    },
    CircleName:{
        type: String,
        required: true
    },
    announcement_title:{
        type: String,
        required: true
    },
    announcement_type:{
        type: String,
        required: true
    },
    announcement_detail:{
        type: String,
        required: true
    },
    announcement_date: {
        type: Date,
        required: true
    },
    ApprovedByAdmin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Announcement',AnnouncementSchema);

