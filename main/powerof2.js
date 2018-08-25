var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function power()
{
    read.question("enter the power value of n:",function(userinput)
    {
        
        utility.power(userinput);
        read.close();
    }
);
}

power();