/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-relative',' \
         <span>{formattedRelative}</span> \
 ',
    function(opts) {
        this.mixin(mixin);
        var self = this;

        this.formatOptions = [
            'style', 'units'
        ];

        var updateItemData = function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && self.getNamedFormat('relative', format);
            var options  = self.filterFormatOptions(opts, defaults);
            self.formattedRelative = self.formatRelative(value, options, {now: opts.now});
        }

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

export default {};


