/**
 * Created by hwang on 2016/2/20.
 */
'use strict';

var _ = require('underscore');

// set NODE_ENV & default: rd
process.env.NODE_ENV = _.isString(process.env.NODE_ENV) ? process.env.NODE_ENV.trim() : '' ;
if (_.indexOf(["production", "qa", "rd", "local"], process.env.NODE_ENV) === -1) {
    process.env.NODE_ENV = 'rd';
}

// load Server
var app = require('app/server'),
    logger = require('app/helpers/logger')('server');

// load Router
require('app/router');

// bind port
app.listen(80);

logger.mark('[NODE_ENV: ' + process.env.NODE_ENV + '] Server started, listen 80.');