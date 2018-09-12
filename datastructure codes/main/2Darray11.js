let prompt = require('prompt-sync')();
let utility = require('/home/admininistrator/workspace/datastructure codes/utility/array.js');
function prime() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    utility.checkPrime(num1, num2);
}
prime();