'use strict';

const log4js = require('log4js');

log4js.configure({
    appenders: {
        file: {
            type: 'dateFile',
            filename: './logs/node.log',
            pattern: 'yyyy-MM-dd-hh-mm-ss',
            alwaysIncludePattern: false,
            daysToKeep: 13,
            maxLogSize: 1024,
            keepFileExt: true
        }
    },
    categories: {
        default: { appenders: ['file'], level: 'debug' }
    }
});

const logger = log4js.getLogger('thing');

setInterval(() => {
    logger.info("just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing just doing the thing");
}, 1000);