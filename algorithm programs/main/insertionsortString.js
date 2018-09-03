var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function insertionsortString() {
    var size=prompt('enter no of size: ');
    start=utility.getCurrentTime();
    utility.insertionsortString(size);
    stop=utility.getCurrentTime();
    res=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    insertionsortString();