array = new Proxy(array, {
  get(target, property, receiver) {
    if (property < 0) {
      property = target.length + Number(property);
    }
    
    return Reflect.get(target, property, receiver);
  }
});