Function.prototype.defer = function(ms) {
    let tmpThis = this;
    function deferWrapper(...args) {
        setTimeout(() => {
            tmpThis.apply(this, args);
        }, ms);
    }

    return deferWrapper;
}