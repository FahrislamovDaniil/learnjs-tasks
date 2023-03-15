function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let number = i;
        let shooter = function() {
            console.log(number);
        };

        shooters.push(shooter);
        i++;
    }
    return shooters;
}