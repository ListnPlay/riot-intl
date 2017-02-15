/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);
        var self = this;

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        var updateItemData = function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && self.getNamedFormat('number', format);
            var options  = self.filterFormatOptions(opts, defaults);
            self.formattedNumber = self.formatNumber(value, options);
        };

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

exports["default"] = {};

//# sourceMappingURL=number.js.map