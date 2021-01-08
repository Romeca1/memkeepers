const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;


var CirclePostSchema = new Schema({
    PostedBy: {type: ObjectId, required:true},
    CircleURL:{type: String,required:true,ref: 'Circle'},
    PostedByName: {type: String, ref: 'Circle'},
    ApprovedByAdmin: {type: Boolean, default:false, required:true},
    Body: String,
    DateCreated: Date,
    ProfilePhotoLink: String,
    Comments: [{body: String, by: ObjectId, byName:String, times: Date, profilephotolink:String,reply:[{replyby:ObjectId,replybyName:String,replybody:String,replytime:Date,replyprofilephotolink:String}]}],
    Likes:[{liketype: Number, by: ObjectId, byName:String, profilephotolink:String}],
    DisLikes:[{disliketype: Number, by: ObjectId, byName:String, profilephotolink:String}],
    VideoAudioImageFileLink: [{imagelink: String, cameraphotolink: String, videolink: String, audiolink: String, filelink: String}],
    HashContent: String,
    TotalView: Number
});

module.exports = mongoose.model('CirclePosts',CirclePostSchema);
