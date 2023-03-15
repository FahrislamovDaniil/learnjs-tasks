function spy(func) {
    function spyWrapper(...args) {
        spyWrapper.calls.push(args);
        return func.apply(this, args);
    }
    spyWrapper.calls = [];

    return spyWrapper;
}