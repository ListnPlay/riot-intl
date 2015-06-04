/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        this.on('update', function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && this.getNamedFormat('number', format);
            var options  = this.filterFormatOptions(opts, defaults);
            this.formattedNumber = this.formatNumber(value, options);
        });

    }
);

exports["default"] = {};

//# sourceMappingURL=number.js.map