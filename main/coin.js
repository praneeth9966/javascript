var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function flip()
{
    read.question("enter no of times to flip coin:",function(userinput)
    {
        
        utility.flip(userinput);
        read.close();
    }
);
}

flip();