/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin"), src$riot$mixin$$ = require("../riot-mixin");

src$riot$$["default"].tag('formatted-message',' \
         <span>{formattedMessage}</span> \
 ',
    function(opts) {
        src$riot$mixin$$["default"](this, src$mixin$$["default"]);
        var message = opts.message;
        var values = Object.keys(opts).reduce(function (values, name) {
            var value = opts[name];
            values[name] = value;

            return values;
        }, {});
        if (message) {
            this.formattedMessage = this.formatMessage(message, values);
        }
    }
);

exports["default"] = {};

//# sourceMappingURL=message.js.map