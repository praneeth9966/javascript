var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primefactor()
{
    read.question("enter a no:",function(userinput)
    {
        
        utility.primefactor(userinput);
        read.close();
    }
);
}

primefactor();