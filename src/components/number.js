/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';
import RiotMixin from '../riot-mixin';

riot.tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        RiotMixin(this, mixin);

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('number', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedNumber = this.formatNumber(value, options);
    }
);

export default {};
