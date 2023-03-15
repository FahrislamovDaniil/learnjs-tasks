function CorrectObj(field) {
    this.field = field;
}

let correctObj = new CorrectObj('field');
let correctObj2 = new correctObj.constructor('field2'); // успешно

function IncorrectObj(field) {
    this.field = field;
}

IncorrectObj.prototype = {
    
};

let incorrectObj = new IncorrectObj('field');
let incorrectObj2 = new incorrectObj.constructor('field2'); // неудачно