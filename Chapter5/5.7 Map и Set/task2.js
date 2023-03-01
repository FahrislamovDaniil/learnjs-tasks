function aclean(arr) {
    let uniques = new Map();
    arr.forEach(item => {
        uniques.set(item.toLowerCase().split('').sort().join(''), item);
    });
    return Array.from(uniques.values());
}