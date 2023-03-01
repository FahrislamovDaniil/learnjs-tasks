function confirm(statement) {}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow it?');
}

function anotherCheckAge(age) {
    return (age > 18) || confirm('Did parents allow it?');
}