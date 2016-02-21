/**
 * Created by hwang on 2016/2/20 23:27.
 */
'use strict';

var env_path = './' + process.env.NODE_ENV + '/';

var self = {
    console: require(env_path + 'console'),
    logger: require(env_path + 'logger'),
    hylaxApi: require(env_path + 'hylaxApi')
};

module.exports = self;