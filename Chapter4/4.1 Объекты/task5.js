function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof(obj[prop]) == 'number') {
            obj[prop] *= 2;
        }
    }
}