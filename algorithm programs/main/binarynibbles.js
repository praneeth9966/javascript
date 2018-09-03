var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function binarynibbles()
{
    read.question("enter a number: ",function(n)
    {
        utility.binarynibbles(n);
            read.close();
    });
}

binarynibbles();