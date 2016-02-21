/**
 * Created by hwang on 2016/2/20.
 */
"use strict";

var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    swig = require('swig'),
    logger = require('morgan'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    session = require('express-session'),
    config = require('app/config');

var app = express(),
    root = path.join(__dirname, '../');

app.disable('x-powered-by');

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', root + 'app' );

// cache favicon
app.use(favicon( root + 'public/favicon.ico' ));

// log; write to file
// TODO: use logrotate
mkdirp.sync( path.dirname(config.console.log_file) );
var logStream = fs.createWriteStream(config.console.log_file, {flags: 'a'});
app.use(logger('combined', {stream: logStream}));
app.use(logger('[:date[clf]] :method :url :status :res[content-length] :response-time ms'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

//app.use(function(req, res, next) {
//    if (!req.session) {
//        next(new Error('init session error'));
//        return ;
//    }
//    next();
//});

process.nextTick(function () {
    app.use(express.static(root + 'public'));
});

module.exports = app;