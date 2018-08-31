var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primeanagram()
{
    read.question("enter n value: ",function(n)
    {
        
        utility.primeanagram(n);
        read.close();
    }
);
}

primeanagram();