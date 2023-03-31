function wrap(target) {
    let proxy = new Proxy(target, {
        get(target, property, receiver) {
            if (property in target) {
                return Reflect.get(target, property, receiver);
            }

            throw new Error('Искомое свойство не существует')  
        }
    });
    return proxy;
}