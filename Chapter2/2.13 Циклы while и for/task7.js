let n = 10;
let isPrime;
if (n < 2) {
    console.log('No prime numbers in this range');
} else {
    console.log(2);
    for (let i = 3; i <= n; i+=2) {
        isPrime = true;
        for (let j = 3; j <= Math.sqrt(i); j+=2) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}