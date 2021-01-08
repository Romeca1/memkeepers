var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); 
var mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const webpush = require('web-push');
const dotenv = require('dotenv');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var petspostsRouter = require('./routes/petposts');
var favPageRouter = require('./routes/favpage');
var favPagemessageRouter = require('./routes/favpagemessage');
var favPagePostsRouter = require('./routes/favpageposts');
var deceasedPersonRouter = require('./routes/deceasedperson');
var adminRouter = require('./routes/adminapi');
var notificationRouter = require('./routes/notification');
var messageRouter = require('./routes/message');
var circleRouter = require('./routes/circle');
var circlePostsRouter = require('./routes/circleposts');



var app = express();
// const PORT = process.env.PORT || 4000;
// app.listen(PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static(__dirname + '/routes/public'));
app.use('/postsimages',express.static(__dirname + '/postsrc/images'));
app.use('/postscameraphoto',express.static(__dirname + '/postsrc/cameraphoto'));
app.use('/postsvideos',express.static(__dirname + '/postsrc/videos'));
app.use('/postsfiles',express.static(__dirname + '/postsrc/files'));
app.use('/postsaudio',express.static(__dirname + '/postsrc/audio'));
app.use('/petspostsimages',express.static(__dirname + '/petposts/petsimage'));
app.use('/petspostscameraphoto',express.static(__dirname + '/petposts/petscamera'));
app.use('/petspostsvideos',express.static(__dirname + '/petposts/petsvideo'));
app.use('/petspostsfiles',express.static(__dirname + '/petposts/petsfiles'));
app.use('/petspostsaudio',express.static(__dirname + '/petposts/petsaudio'));
app.use('/pageimages',express.static(__dirname + '/favpage/pageprofilepic'));
app.use('/pagebackgroundimages',express.static(__dirname + '/favpage/pagebackgroundpic'));
app.use('/pagepostsimages',express.static(__dirname + '/favpage/pageposts/images'));
app.use('/pagepostscameraphoto',express.static(__dirname + '/favpage/pageposts/cameraphoto'));
app.use('/pagepostsvideos',express.static(__dirname + '/favepage/pageposts/videos'));
app.use('/pagepostsfiles',express.static(__dirname + '/favepage/pageposts/files'));
app.use('/pagepostsaudio',express.static(__dirname + '/favepage/pageposts/audio'));
app.use('/circleimages',express.static(__dirname + '/circle/circleprofilepic'));
app.use('/circlebackgroundimages',express.static(__dirname + '/circle/circlebackgroundpic'));
app.use('/circlepostsimages',express.static(__dirname + '/circle/circleposts/images'));
app.use('/circlepostscameraphoto',express.static(__dirname + '/circle/circleposts/cameraphoto'));
app.use('/circlepostsvideos',express.static(__dirname + '/circle/circleposts/videos'));
app.use('/circlepostsfiles',express.static(__dirname + '/circle/circleposts/files'));
app.use('/circlepostsaudio',express.static(__dirname + '/circle/circleposts/audio'));
app.use('/deceasedpersonprofilepic',express.static(__dirname + '/deceasedperson/profilepic'));
app.use('/deceasedpersonbackgroundpic',express.static(__dirname + '/deceasedperson/backgroundpic'));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/petsposts',petspostsRouter);
app.use('/favpage', favPageRouter);
app.use('/favpagemessage',favPagemessageRouter);
app.use('/favpageposts',favPagePostsRouter);
app.use('/deceasedperson',deceasedPersonRouter);
app.use('/admin',adminRouter);
app.use('/notification',notificationRouter);
app.use('/message',messageRouter);
app.use('/circle', circleRouter);
app.use('/circleposts',circlePostsRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
