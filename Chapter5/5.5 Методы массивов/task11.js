function getAverageAge(users) {
    let sum = 0;
    users.forEach(item => sum += item.age);
    return sum/users.length;
}