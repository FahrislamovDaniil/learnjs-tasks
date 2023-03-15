//Не работает с console.log, так как toString не вызывается 

function sum(a) {
    let result = a;
  
    function nextSum(b) {
        result += b;
        return nextSum;
    };
    nextSum.toString = () => result;
  
    return nextSum;
}