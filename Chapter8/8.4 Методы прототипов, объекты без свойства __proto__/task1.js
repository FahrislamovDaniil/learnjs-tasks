let dictionary = Object.create(null);

Object.defineProperty(dictionary, toString, {
    value() {
        return Object.keys(this).join();
    }
});