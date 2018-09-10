var readLine=require('readline');
var utility=require('../utility/dequeue.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function pallindrome()
{
    read.question("enter a string:",function(str)
    {
        
        utility.pallindrome(str=str.replace(/ /g,""));
        read.close();
    }
);
}

pallindrome();