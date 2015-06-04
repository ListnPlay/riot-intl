/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-message',' \
         <span>{formattedMessage}</span> \
 ',
    function(opts) {
        this.mixin(mixin);

        this.on('update', function() {
            var message = opts.message;
            var values = Object.keys(opts).reduce(function (values, name) {
                var value = opts[name];
                values[name] = value;

                return values;
            }, {});
            if (message) {
                this.formattedMessage = this.formatMessage(message, values);
            }
        });
    }
);

export default {};
