/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-relative',' \
         <span>{formattedRelative}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);
        var self = this;

        this.formatOptions = [
            'style', 'units'
        ];

        var updateItemData = function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && self.getNamedFormat('relative', format);
            var options  = self.filterFormatOptions(opts, defaults);
            self.formattedRelative = self.formatRelative(value, options, {now: opts.now});
        }

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

exports["default"] = {};

//# sourceMappingURL=relative.js.map