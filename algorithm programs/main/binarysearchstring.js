var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function binarystring() {
    var size=prompt('enter no of size: ');
    start=utility.getCurrentTime();
    utility.binarystring(size);
    stop=utility.getCurrentTime();
    res=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    binarystring();
