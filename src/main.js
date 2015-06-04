/* jshint esnext: true */

import {
    IntlMixin,
    FormattedMessage,
    FormattedDate,
    FormattedNumber,
    FormattedTime,
    FormattedRelative,
    __addLocaleData
} from './riot-intl';

export default {
    FormattedMessage    : FormattedMessage,
    FormattedDate       : FormattedDate,
    FormattedNumber     : FormattedNumber,
    FormattedTime       : FormattedTime,
    FormattedRelative   : FormattedRelative,
    IntlMixin           : IntlMixin,
    __addLocaleData     : __addLocaleData
};
