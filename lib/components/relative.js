/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin"), src$riot$mixin$$ = require("../riot-mixin");

src$riot$$["default"].tag('formatted-relative',' \
         <span>{formattedRelative}</span> \
 ',
    function(opts) {
        src$riot$mixin$$["default"](this, src$mixin$$["default"]);

        this.formatOptions = [
            'style', 'units'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('relative', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedRelative = this.formatRelative(value, options, {now: opts.now});
    }
);

exports["default"] = {};

//# sourceMappingURL=relative.js.map