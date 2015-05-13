/* jshint node:true */
'use strict';

var oldriot = global.riot;
global.riot = require('riot');

// Require the lib and add all locale data to `RiotIntl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
var RiotIntl = require('./lib/riot-intl');
require('./lib/locales');

exports = module.exports = RiotIntl;

// Put back `global.riot` to how it was.
if (oldriot) {
    global.riot = oldriot;
} else {
    // IE < 9 will throw when trying to delete something off the global object,
    // `window`, so this does the next best thing as sets it to `undefined`.
    try {
        delete global.riot;
    } catch (e) {
        global.riot = undefined;
    }
}
