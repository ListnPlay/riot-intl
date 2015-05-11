/* jshint esnext: true */

"use strict";
exports.__addLocaleData = __addLocaleData;
var intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), src$en$$ = require("./en"), src$components$message$$ = require("./components/message"), src$mixin$$ = require("./mixin"), src$riot$mixin$$ = require("./riot-mixin");
function __addLocaleData(data) {
    intl$messageformat$$["default"].__addLocaleData(data);
}

__addLocaleData(src$en$$["default"]);
exports.IntlMixin = src$mixin$$["default"], exports.RiotMixin = src$riot$mixin$$["default"], exports.FormattedMessage = src$components$message$$["default"];

//# sourceMappingURL=riot-intl.js.map