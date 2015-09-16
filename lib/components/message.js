/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-message',' \
         <span>{formattedMessage}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);

        this.on('update', function() {
            var message = opts.message;
            var values = Object.keys(opts).reduce(function (values, name) {
                var value = opts[name];
                values[name] = value;

                return values;
            }, {});
            if (message) {
                this.formattedMessage = this.formatMessage(message, values);
            }
        });
    }
);

exports["default"] = {};

//# sourceMappingURL=message.js.map