/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-time',' \
         <span>{formattedTime}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);

        this.formatOptions = [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ];

        this.on('update', function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && this.getNamedFormat('time', format);
            var options  = this.filterFormatOptions(opts, defaults);
            this.formattedTime = this.formatTime(value, options);
        });

    }
);

exports["default"] = {};

//# sourceMappingURL=time.js.map