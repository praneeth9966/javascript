var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function distancep()
{
    read.question("enter value of x:",function(x)
    {
        read.question("enter value of y:",function(y){
            
        utility.distancep(x,y);
        read.close();
            
        });
    }
);
}

distancep();