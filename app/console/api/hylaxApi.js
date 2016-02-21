/**
 * Created by hwang on 2016/2/21 20:54.
 */
'use strict';

var openapiHelper = require('app/helpers/hylaxApi'),
    config = require('app/config'),
    logger = require('app/helpers/logger')('api-hylaxApi');

var request = openapiHelper.request,
    api = config.hylaxApi.api;

var self = {
    PT: function (req, res, next) {

        var url = api + req.url;

        var body = (req.body instanceof Buffer || req.body instanceof String) ? req.body : '';
        req.headers['content-length'] = body.length;

        var x = request(req, {
            url: url,
            method: req.method,
            headers: req.headers,
            body: body
        });

        x.on('error', function (e) {
            logger.error('request openapi error', e);
            if (!res.headersSent) {
                res.status(500).send('Internal Server Error');
                res.end();
            }
        });

        x.pipe(res);

    }
};


module.exports = self;