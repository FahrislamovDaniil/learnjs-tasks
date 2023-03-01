function getMaxSubSum(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = 0;
        for (let j = 0; j < arr.length - i; j++) {
            current += arr[i + j];
            max = Math.max(max, current);
        }
    }
    return max;
}