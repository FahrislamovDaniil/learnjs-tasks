function printListCycleReversed(list) {
    let element = list;
    let result = [];
    while (element != null) {
        result.unshift(element.value)
        element = element.next;
    }
    result.forEach(el => console.log(el));
}

function printListRecurReversed(list) {
    if (list.next != null) {
        printListRecurReversed(list.next)
    }
    console.log(list.value);
}