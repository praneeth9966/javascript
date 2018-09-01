var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function binary() {
    var size=prompt('enter no of size: ');
    utility.binary(size);
    }
    binary();
