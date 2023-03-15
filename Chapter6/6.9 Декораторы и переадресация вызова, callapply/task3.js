function debounce(f, ms) {
    function debounceWrapper(...args) {
        if (!debounceWrapper.last) {
            debounceWrapper.last = Date.now()
            f.apply(this, args);
            return;
        }
        
        if ((Date.now() - debounceWrapper.last) >= ms) {
            debounceWrapper.last = Date.now();
            f.apply(this, args);
        }
    }

    return debounceWrapper;
}