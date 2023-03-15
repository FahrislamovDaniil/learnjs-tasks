function delay(f, ms) {
    function delayWrapper(...args) {
        setTimeout(() => {
            f.apply(this, args)
        }, ms);
    }

    return delayWrapper;
}