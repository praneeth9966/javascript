var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function newtonsqrt()
{
    read.question("enter a number: ",function(c)
    {
            utility.newtonsqrt(c);
            read.close();
    });
}

newtonsqrt();