const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const followSchema = new Schema(
    {
        user: { type: ObjectId, required: true, ref: 'Register' },
        target: { type: ObjectId, required: true, ref: 'Register' },
    });

    module.exports = mongoose.model('Follow', followSchema);