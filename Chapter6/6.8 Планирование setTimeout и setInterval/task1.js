function printNumbersInterval(from, to) {
    let curr = from;
    let timerId = setInterval(() => {
        console.log(curr++);
        if (curr > to) {
            clearInterval(timerId);
        }
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let curr = from;
    setTimeout(function print() {
        console.log(curr++);
        if (curr <= to) {
            setTimeout(print, 1000);
        }
    }, 1000);
}