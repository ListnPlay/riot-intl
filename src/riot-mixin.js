/* jshint esnext:true */

// Mixin util for riot, until it is merged from riot-dev
function makeProxy(obj,func) {
    return function() {
        var args = [].slice.call(arguments);
        return func.apply(obj, args);
    };
}

var riotMixin = function(obj, mix) {
    for(var x in mix) {
       if(mix.hasOwnProperty(x)) {
            obj[x] = makeProxy(obj, mix[x]);
        }
    }
};

export default riotMixin;
