function* pseudoRandom(seed) {
    let previous = seed;
    while(true) {
        previous = previous * 16807 % 2147483647;
        yield previous;
    }
}