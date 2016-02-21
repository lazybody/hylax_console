/**
 * Created by hwang on 2016/2/20 22:55.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('app/config'),
    _ = require('underscore');

var router = express.Router();

// index.html
router.get('/', function (req, res, next) {
    res.render('console/views/index.html');
});

// apis
var hylaxApi = require('app/console/api/hylaxApi');


var passthrough_openapis = [
    // member
    "get /merchant/:account/members"
];

for (var i = 0; i < passthrough_openapis.length; i++) {
    var d = passthrough_openapis[i].split(' ');
    router[d[0]](d[1], bodyParser.raw({
        "type": "*/*",
        "limit": '10mb'
    }), hylaxApi.PT);
}

module.exports = router;