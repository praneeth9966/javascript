var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function leap()
{
    read.question("enter a 4 digit no:",function(userinput)
    {
        
        utility.leap(userinput);
        read.close();
    }
);
}

leap();