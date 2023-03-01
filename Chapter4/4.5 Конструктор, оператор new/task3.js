function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(inc) {
        this.value += inc;
    }
}

let accumulator = new Accumulator(1);

accumulator.read(4);
accumulator.read(5);

console.log(accumulator.value);