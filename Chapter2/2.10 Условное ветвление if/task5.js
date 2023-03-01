let login = '';
let message = (login == 'Employee') ? 'Hi' :
    (login == 'Director') ? 'Hello' :
    (login == '') ? 'No login' : '';
console.log(message);