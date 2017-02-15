/* jshint esnext:true */

import riot from '../riot';
import mixin from '../mixin';

riot.tag('formatted-message',' \
         <span>{formattedMessage}</span> \
 ',
    function(opts) {
        this.mixin(mixin);
        var self = this;

        var updateItemData = function() {
            var message = opts.message;
            var values = Object.keys(opts).reduce(function (values, name) {
                var value = opts[name];
                values[name] = value;

                return values;
            }, {});
            if (message) {
                self.formattedMessage = self.formatMessage(message, values);
            }
        };

        this.on('update', function() {
            updateItemData();
        });

        updateItemData();
    }
);

export default {};
