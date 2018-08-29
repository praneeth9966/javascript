/*var permutations = [];

function doPerm(str, arr) {
    if (typeof (str) == 'string') 
    str = str.split('');
    if (str.length == 0) 
    permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        doPerm(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }
}
doPerm('abc', []);
console.log(permutations);*/
var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js');
function doPerm()
{
    var str=prompt('enter a string');
    utility.doPerm(str);
}
doPerm();