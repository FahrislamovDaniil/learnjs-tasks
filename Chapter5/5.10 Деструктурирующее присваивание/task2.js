function topSalary(salaries) {
    let maxName = null;
    let maxMoney = 0;
    for(let [name, money] of Object.entries(salaries)) {
        if (money > maxMoney) {
            maxMoney = money;
            maxName = name;
        }
    }
    return maxName;
}