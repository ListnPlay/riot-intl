/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';
import RiotMixin from '../riot-mixin';

riot.tag('formatted-relative',' \
         <span>{formattedRelative}</span> \
 ',
    function(opts) {
        RiotMixin(this, mixin);

        this.formatOptions = [
            'style', 'units'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('relative', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedRelative = this.formatRelative(value, options, {now: opts.now});
    }
);

export default {};


