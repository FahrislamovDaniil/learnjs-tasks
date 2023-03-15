function sumToCycle(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToRecur(n) {
    return n === 1 ? 1 : (sumToRecur(n - 1) + n);
}

function sumToProg(n) {
    return ((n + 1) * n) / 2;
}