function makeObservable(target) {
    target.handlers = [];
    target.observe = function(handler) {
        this.handlers.push(handler);
    }

    let proxy =  new Proxy(target, {
        set(target, property, value) {
            let result = Reflect.set(...arguments);
            if (result) {
                target.handlers.forEach(handler => handler(property, value));
            }
            return result;
        }
    });
    return proxy;
}