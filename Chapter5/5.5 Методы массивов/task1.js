function camelize(str) {
    let parts = str.split('-');
    let result = '';
    parts.forEach((item, index) => result += index > 0 ? item[0].toUpperCase() + item.slice(1) : item);
    return result;
}