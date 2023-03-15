function fib(n) {
    let tmp = [1, 1];
    for(let i = 3; i <= n; i++) {
        tmp.push(tmp[0] + tmp[1]);
        tmp.shift();
    }
    let result = tmp[1];
    return result;
}