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
    read.question("enter minimun value: ",function(min)
    {
        read.question("enter maximun value",function(max)
        {
        
        utility.primeanagram(min,max);
        read.close();
    });
    }
);
}

primeanagram();