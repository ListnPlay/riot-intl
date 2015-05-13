/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin"), src$riot$mixin$$ = require("../riot-mixin");

src$riot$$["default"].tag('formatted-date',' \
         <span>{formattedDate}</span> \
 ',
    function(opts) {
        src$riot$mixin$$["default"](this, src$mixin$$["default"]);

        this.formatOptions = [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedDate = this.formatDate(value, options);
    }
);

exports["default"] = {};

//# sourceMappingURL=date.js.map