/* jshint esnext: true */

import {
    IntlMixin,
    FormattedMessage,
    FormattedDate,
    FormattedNumber,
    __addLocaleData,
    RiotMixin
} from './riot-intl';

export default {
    FormattedMessage    : FormattedMessage,
    FormattedDate       : FormattedDate,
    FormattedNumber     : FormattedNumber,
    IntlMixin           : IntlMixin,
    RiotMixin           : RiotMixin,
    __addLocaleData     : __addLocaleData
};
