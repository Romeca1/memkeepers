const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var CircleEventSchema = new Schema({
    CreatedBy:{
        type:ObjectId,
        required:true
    },
    CreatedByName:{
        type:String,
        required:true
    },
    EventName:{
        type: String,
        required: true
    },
    EventHost:{
        type: String,
        required: true
    },
    CoHost:{
        type: String
    },
    CircleURL:{
        type: String,
        required: true
    },
    CircleName:{
        type: String,
        required: true
    },
    StartDate:{
       type: Date,
       required: true
    },
    EndDate:{
        type: Date,
        required: true
    },
    DateCreated:{
        type: Date,
        required: true
    },
    EventDetails:{
        type: String,
        required: true
    },
    Location: {
        type: Object
      },
    EventLocationType: {
        type: String
    },
    Category:{
        type: String
    },
    TicketLink:{
        type: String
    },
    OnlyAdminCanPost:{
        type: Boolean,
        default: false
    },
    ApprovedByAdmin:{
        type: Boolean,
        default: false
    },
    Comments: [{body: String, by: ObjectId, byName:String, times: Date, profilephotolink:String,reply:[{replyby:ObjectId,replybyName:String,replybody:String,replytime:Date,replyprofilephotolink:String}]}],
    Likes:[{liketype: Number, by: ObjectId, byName:String, profilephotolink:String}],
    DisLikes:[{disliketype: Number, by: ObjectId, byName:String, profilephotolink:String}],
});


module.exports = mongoose.model('CircleEvent',CircleEventSchema);

