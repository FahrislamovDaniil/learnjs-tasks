function pow(x, n) {
    if (Number.isInteger(n) && n > 0) {
        return `${x ** n}`;
    } else {
        return 'n must be a positive integer';
    }
}
console.log(pow(1, 100));