function sumInput() {
    let numbers = [];
    let stop = false;
    let sum = 0;
    
    while (!stop) {
        let number = prompt('Enter a number to sum', '');
        if (!isFinite(number) || number === null || number === '') {
            stop = true;
        } else numbers.push(+number);
    }

    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

alert(sumInput());