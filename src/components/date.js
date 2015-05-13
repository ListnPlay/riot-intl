/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';
import RiotMixin from '../riot-mixin';

riot.tag('formatted-date',' \
         <span>{formattedDate}</span> \
 ',
    function(opts) {
        RiotMixin(this, mixin);

        this.formatOptions = [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ];

        var value = opts.value;
        var format = opts.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = this.filterFormatOptions(opts, defaults);
        this.formattedDate = this.formatDate(value, options);
    }
);

export default {};
