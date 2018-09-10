var prompt=require('prompt-sync')();
    var utility=require('../utility/stack.js');
    function simple() {
    var exp=prompt('enter a expression: ');
    utility.simple(exp);
    
    }
    simple();