/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-relative',' \
         <span>{formattedRelative}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);

        this.formatOptions = [
            'style', 'units'
        ];

        this.on('update', function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && this.getNamedFormat('relative', format);
            var options  = this.filterFormatOptions(opts, defaults);
            this.formattedRelative = this.formatRelative(value, options, {now: opts.now});
        })

    }
);

exports["default"] = {};

//# sourceMappingURL=relative.js.map