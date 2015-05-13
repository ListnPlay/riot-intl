/* jshint esnext: true */

"use strict";
exports.__addLocaleData = __addLocaleData;
var intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), src$en$$ = require("./en"), src$components$message$$ = require("./components/message"), src$components$date$$ = require("./components/date"), src$components$number$$ = require("./components/number"), src$components$time$$ = require("./components/time"), src$components$relative$$ = require("./components/relative"), src$mixin$$ = require("./mixin"), src$riot$mixin$$ = require("./riot-mixin");
function __addLocaleData(data) {
    intl$messageformat$$["default"].__addLocaleData(data);
}

__addLocaleData(src$en$$["default"]);
exports.IntlMixin = src$mixin$$["default"], exports.RiotMixin = src$riot$mixin$$["default"], exports.FormattedMessage = src$components$message$$["default"], exports.FormattedDate = src$components$date$$["default"], exports.FormattedNumber = src$components$number$$["default"], exports.FormattedTime = src$components$time$$["default"], exports.FormattedRelative = src$components$relative$$["default"];

//# sourceMappingURL=riot-intl.js.map