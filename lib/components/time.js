/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-time',' \
         <span>{formattedTime}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);
        var self = this;

        this.formatOptions = [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ];

        var updateItemData = function() {
            /* Support only short. workaround for explorer. need to upgrade and rewrite riot-intl */
            var value = opts.value
            var ms = value % 1000;
            value = (value - ms) / 1000;
            var secs = value % 60;
            var mins = (value - secs) / 60;

            self.formattedTime =  mins + ':' + ('0' + secs).slice(-2);
            /*
                var value = opts.value;
                var format = opts.format;
                var defaults = format && self.getNamedFormat('time', format);
                var options = self.filterFormatOptions(opts, defaults);
                self.formattedTime = self.formatTime(value, options);
            */
        };

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

exports["default"] = {};

//# sourceMappingURL=time.js.map