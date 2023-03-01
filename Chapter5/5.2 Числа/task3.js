function readNumber() {
    let number;
    do {
        number = prompt('Enter a number', '');
    } while (!isFinite(number))

    if (number === '' || number === null) {
        return null;
    }
    return +number;
}

alert(readNumber());