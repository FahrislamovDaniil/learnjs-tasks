function sumSalaries(salaries) {
    let sum = 0;
    for (let money of Object.values(salaries)) {
        sum += money;
    }
    return sum;
}