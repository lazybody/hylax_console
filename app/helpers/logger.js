/**
 * Created by hwang on 2016/2/21 0:01.
 */
'use strict';

var log4js = require('log4js'),
    config = require('app/config').logger;

log4js.setGlobalLogLevel(config.level);

module.exports = function(ns) {
    return log4js.getLogger(ns);
};