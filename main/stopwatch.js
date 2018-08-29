var readLine=require('readline');
var utility=require('../utility/utility.js');
let startTime = 0;
 read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

function stopwatch()
{
    read.question("enter 1 to start:",function(start)
    { 
        if(start==1)
        {
            startTime = utility.getCurrentTime();

            read.question("enter 0 to end:",function(stop)
            {
               var stopTime = utility.getCurrentTime(); 
       var res = utility.getElapsedTime( startTime,stopTime);
        console.log("elapsed time="+res+"seconds");
        read.close();
            });
        }
        else
        {
            console.log("plz enter valid input");
            read.close();
        }
        
    });
}

    


stopwatch();