/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        this.mixin(mixin);

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        this.on('update', function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && this.getNamedFormat('number', format);
            var options  = this.filterFormatOptions(opts, defaults);
            this.formattedNumber = this.formatNumber(value, options);
        });

    }
);

export default {};
