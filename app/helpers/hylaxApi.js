/**
 * Created by hwang on 2016/2/21 20:57.
 */
'use strict';

var _request = require('request'),
    config = require('app/config'),
    logger = require('app/helpers/logger')('helper-hylaxApi');

var api = config.hylaxApi.api;


var request = function (req, options, callback) {
    if (!options.headers) {
        options.headers = req.headers;
    }

    options.timeout = 15000;

    logger.trace('call hylax api:', options);

    var x = _request(options, callback);
    return x;
};


var self = {
    request: request
};


module.exports = self;