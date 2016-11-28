/* jshint esnext:true */
import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';
import createFormatCache from 'intl-format-cache';

// -----------------------------------------------------------------------------

function assertIsDate(date, errMsg) {
    // Determine if the `date` is valid by checking if it is finite, which is
    // the same way that `Intl.DateTimeFormat#format()` checks.
    if (!isFinite(date)) {
        throw new TypeError(errMsg);
    }
}

export default {
    filterFormatOptions: function (obj, defaults) {
        if (!defaults) { defaults = {}; }

        return (this.formatOptions || []).reduce(function (opts, name) {
            var alternativeName = null;
            if (name) {
                // parameter options are converted to lowercase somewhere along the way (by riot?), we need to recover the correct names
                alternativeName = name.split(/(?=[A-Z])/).join('-').toLowerCase();  // split on uppercase, then join with a separator and lowercase. i.e find minimum-fraction-digits as well as minimumFractionDigits
            }

            if (obj.hasOwnProperty(name)) {
                opts[name] = obj[name];
            } else if (alternativeName && obj.hasOwnProperty(alternativeName)) {
                opts[name] = obj[alternativeName];
            } else if (defaults.hasOwnProperty(name)) {
                opts[name] = defaults[name];
            }

            return opts;
        }, {});
    },

    getNumberFormat  : createFormatCache(Intl.NumberFormat),
    getDateTimeFormat: createFormatCache(Intl.DateTimeFormat),
    getMessageFormat : createFormatCache(IntlMessageFormat),
    getRelativeFormat: createFormatCache(IntlRelativeFormat),

    getChildContext: function () {
        var opts   = this.opts;

        return {
            locales:  this.locales,
            formats:  this.formats,
            messages: this.messages
        };
    },

    formatDate: function (date, options) {
        date = new Date(date || 0);
        assertIsDate(date, 'A date or timestamp must be provided to formatDate()');
        return this._format('date', date, options);
    },

    formatTime: function (date, options) {
        date = new Date(date || 0);
        assertIsDate(date, 'A date or timestamp must be provided to formatTime()');
        return this._format('time', date, options);
    },

    formatRelative: function (date, options, formatOptions) {
        date = new Date(date || 0);
        assertIsDate(date, 'A date or timestamp must be provided to formatRelative()');
        return this._format('relative', date, options, formatOptions);
    },

    formatNumber: function (num, options) {
        return this._format('number', num || 0, options);
    },

    formatMessage: function (message, values) {
        var locales = this.locales || this.parent.locales;
        var formats = this.formats || this.parent.formats;

        // When `message` is a function, assume it's an IntlMessageFormat
        // instance's `format()` method passed by reference, and call it. This
        // is possible because its `this` will be pre-bound to the instance.
        if (typeof message === 'function') {
            return message(values);
        }

        if (typeof message === 'string') {
            message = this.getMessageFormat(message, locales, formats);
        }

        return message.format(values);
    },

    getIntlMessage: function (path) {
        var messages  = this.messages || this.parent.messages;
        var pathParts = path.split('.');

        var message;
        
        try {
            message = pathParts.reduce(function (obj, pathPart) {
                return obj[pathPart];
            }, messages);
        } finally {
            if (message === undefined) {
                console.error('Could not find Intl message: ' + path);
                throw new ReferenceError('Could not find Intl message: ' + path);
            }
        }

        return message;  
    },

    getNamedFormat: function (type, name) {
        var formats = this.formats || this.parent.formats;
        var format  = null;

        try {
            format = formats[type][name];
        } finally {
            if (!format) {
                throw new ReferenceError(
                    'No ' + type + ' format named: ' + name
                );
            }
        }

        return format;
    },

    _format: function (type, value, options, formatOptions) {
        var locales = this.locales || this.parent.locales;

        if (options && typeof options === 'string') {
            options = this.getNamedFormat(type, options);
        }

        switch(type) {
            case 'date':
            case 'time':
                return this.getDateTimeFormat(locales, options).format(value);
            case 'number':
                return this.getNumberFormat(locales, options).format(value);
            case 'relative':
                return this.getRelativeFormat(locales, options).format(value, formatOptions);
            default:
                throw new Error('Unrecognized format type: ' + type);
        }
    }
};
