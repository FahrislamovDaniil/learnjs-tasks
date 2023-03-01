function Calculator() {
    this.operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    },
    this.calculate = function(str) {
        let parts = str.split(' ');
        if (parts.length > 3) {
            return null;
        }
        let x = parts[0];
        let op = parts[1];
        let y = parts[2];
        if (!isFinite(x) || !isFinite(y)) {
            return null;
        }
        for (let key in this.operators) {
            if (key === op) {
                return this.operators[key](+x, +y);
            }
        }
        return null;
    },
    this.addMethod = function(name, func) {
        this.operators[name] = func;
    }
}