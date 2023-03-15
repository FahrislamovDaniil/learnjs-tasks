function throttle(func, ms) {
    let tmpThis;
    let tmpArgs;

    function throttleWrapper(...args) {
        if (!throttleWrapper.last) {
            throttleWrapper.last = Date.now()
            func.apply(this, args);

            setTimeout(() => {
                if (tmpArgs) {
                    throttleWrapper.apply(tmpThis, tmpArgs);
                    tmpArgs = null;
                    tmpArgs = null;
                }
            }, ms);
            return;
        }
        
        if ((Date.now() - throttleWrapper.last) >= ms) {
            throttleWrapper.last = Date.now();
            func.apply(this, args);

            setTimeout(() => {
                if (tmpArgs) {
                    throttleWrapper.apply(tmpThis, tmpArgs);
                    tmpArgs = null;
                    tmpArgs = null;
                }
            }, ms);
            return;
        }

        tmpThis = this;
        tmpArgs = args;
    }

    return throttleWrapper;
}