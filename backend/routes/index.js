const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Db', {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

const contactUs = require('./api/contactUs');
const search = require('./api/search');
const getAds = require('./api/post/ads');

router.post('/contactUs', contactUs);
router.get('/search', search);
router.get('/ads', getAds);

module.exports = router;