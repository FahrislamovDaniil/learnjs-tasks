function printListCycle(list) {
    let element = list;
    while (element != null) {
        console.log(element.value);
        element = element.next;
    }
}

function printListRecur(list) {
    console.log(list.value);
    if (list.next != null) {
        printListRecur(list.next)
    }
}