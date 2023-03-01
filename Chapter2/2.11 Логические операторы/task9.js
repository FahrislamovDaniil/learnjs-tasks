let login = prompt('Who is there?', '');
if (login == null || login == '') {
    alert('Canceled');
} else if (login == 'Admin') {
    let password = prompt('Password?', '');
    if (password == null || password == '') {
        alert('Canceled');
    } else if (password == 'I am in charge') {
        alert('Hello!');
    } else {
        alert('Incorrect password');
    }
} else {
    alert('I don\'t know you');
}