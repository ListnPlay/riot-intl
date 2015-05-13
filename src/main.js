/* jshint esnext: true */

import {
    IntlMixin,
    FormattedMessage,
    FormattedDate,
    FormattedNumber,
    FormattedTime,
    FormattedRelative,
    __addLocaleData,
    RiotMixin
} from './riot-intl';

export default {
    FormattedMessage    : FormattedMessage,
    FormattedDate       : FormattedDate,
    FormattedNumber     : FormattedNumber,
    FormattedTime       : FormattedTime,
    FormattedRelative   : FormattedRelative,
    IntlMixin           : IntlMixin,
    RiotMixin           : RiotMixin,
    __addLocaleData     : __addLocaleData
};
