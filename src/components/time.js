/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-time',' \
         <span>{formattedTime}</span> \
 ',
    function(opts) {
        this.mixin(mixin);

        this.formatOptions = [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ];

        this.on('update', function() {
            var value = opts.value;
            var format = opts.format;
            var defaults = format && this.getNamedFormat('time', format);
            var options  = this.filterFormatOptions(opts, defaults);
            this.formattedTime = this.formatTime(value, options);
        });

    }
);

export default {};
