/* jshint esnext:true */

"use strict";
var src$riot$$ = require("../riot"), src$mixin$$ = require("../mixin");

src$riot$$["default"].tag('formatted-message',' \
         <span>{formattedMessage}</span> \
 ',
    function(opts) {
        this.mixin(src$mixin$$["default"]);
        var self = this;

        var updateItemData = function() {
            var message = opts.message;
            var values = Object.keys(opts).reduce(function (values, name) {
                var value = opts[name];
                values[name] = value;

                return values;
            }, {});
            if (message) {
                self.formattedMessage = self.formatMessage(message, values);
            }
        };

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

exports["default"] = {};

//# sourceMappingURL=message.js.map