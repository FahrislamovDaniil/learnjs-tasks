function inBetween(a, b) {
    return function(item) {
        return (item >= a && item <= b);
    }
}

function inArray(array) {
    return function(item) {
        return array.includes(item);
    }
}