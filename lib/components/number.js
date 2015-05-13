/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin"), src$riot$mixin$$ = require("../riot-mixin");

src$riot$$["default"].tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        src$riot$mixin$$["default"](this, src$mixin$$["default"]);

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('number', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedNumber = this.formatNumber(value, options);
    }
);

exports["default"] = {};

//# sourceMappingURL=number.js.map