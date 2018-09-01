var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function binarystring() {
    var size=prompt('enter no of size: ');
    utility.binarystring(size);
    }
    binarystring();
