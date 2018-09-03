var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function bubblesortString() {
    var size=prompt('enter no of size: ');
    start=utility.getCurrentTime();
    utility.bubblesortString(size);
    stop=utility.getCurrentTime();
    res=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    bubblesortString();