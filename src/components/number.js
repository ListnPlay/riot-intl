/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-number',' \
         <span>{formattedNumber}</span> \
 ',
    function(opts) {
        this.mixin(mixin);
        var self = this;

        this.formatOptions = [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ];

        var updateItemData = function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && self.getNamedFormat('number', format);
            var options  = self.filterFormatOptions(opts, defaults);
            self.formattedNumber = self.formatNumber(value, options);
        };

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

export default {};
