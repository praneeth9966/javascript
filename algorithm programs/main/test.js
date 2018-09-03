var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function test() {
    var size=prompt('enter no of size: ');

    start=utility.getCurrentTime();
    utility.binary(size);
    stop=utility.getCurrentTime();
    res1=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res1+" secs");

    start=utility.getCurrentTime();
    utility.binarystring(size);
    stop=utility.getCurrentTime();
    res2=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res2+" secs");

    start=utility.getCurrentTime();
    utility.insertionsortInteger(size);
    stop=utility.getCurrentTime();
    res3=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res3+" secs");

    start=utility.getCurrentTime();
    utility.insertionsortString(size);
    stop=utility.getCurrentTime();
    res4=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res4+" secs");

    start=utility.getCurrentTime();
    utility.bubblesortInteger(size);
    stop=utility.getCurrentTime();
    res5=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res5+" secs");

    start=utility.getCurrentTime();
    utility.bubblesortString(size);
    stop=utility.getCurrentTime();
    res6=utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res6+" secs");

    var arr=[res1,res2,res3,res4,res5,res6]
    arr=arr.sort(function(a,b){
        return b-a;
    });
    console.log(arr);
    }
    test();
