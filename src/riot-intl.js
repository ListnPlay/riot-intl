/* jshint esnext: true */

import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';

import defaultLocale from './en';

import FormattedMessage from './components/message';
import FormattedDate from './components/date';
import FormattedNumber from './components/number';
import IntlMixin from './mixin';
import RiotMixin from './riot-mixin';

export {
    IntlMixin,
    RiotMixin,
    FormattedMessage,
    FormattedDate,
    FormattedNumber
};

export function __addLocaleData(data) {
    IntlMessageFormat.__addLocaleData(data);
}

__addLocaleData(defaultLocale);
