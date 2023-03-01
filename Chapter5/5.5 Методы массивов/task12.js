function unique(arr) {
    let uniques = [];
    arr.forEach(item => {
        if (!uniques.includes(item)) {
            uniques.push(item);
        }
    });
    return uniques;
}