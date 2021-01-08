const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var NotificationSchema = new Schema({
    user_id:{
        type: ObjectId,
        unique: true,
        required: true
    },
    notificationdetails:[{
        creation_date_time:
        {
        type: Date,
        required: true
        },
        view_date_time:
        {
            type: Date
        },
        notification_text: 
        {
            type: String,
            required: true
        },
        link: 
        {
            type: String
        },
        is_viewed: 
        {
            type: Boolean,
            required: true
        }
    }]
});

module.exports = mongoose.model('Notifications',NotificationSchema);

