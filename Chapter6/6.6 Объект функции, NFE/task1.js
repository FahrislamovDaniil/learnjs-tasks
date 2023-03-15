function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = function(a) {
        count = a;
    }
  
    counter.decrease = function() {
        count--;
    }
  
    return counter;
}