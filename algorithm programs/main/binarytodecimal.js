var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function toBinary()
{
    read.question("enter a number: ",function(n)
    {
            utility.toBinary(n);
            read.close();
    });
}

toBinary();