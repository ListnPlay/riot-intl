/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-date',' \
         <span>{formattedDate}</span> \
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
            var value = opts.value;
            var format = opts.format;
            var defaults = format && self.getNamedFormat('date', format);
            var options  = self.filterFormatOptions(opts, defaults);
            self.formattedDate = self.formatDate(value, options);
        }

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();

    }
);

exports["default"] = {};

//# sourceMappingURL=date.js.map