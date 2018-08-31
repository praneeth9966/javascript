var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function binary() {
    var row=prompt('enter no of rows: ');
    utility.binary(row);
    }
    binary();
