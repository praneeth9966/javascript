var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function vending()
{
    read.question("enter a V value: ",function(V)
    {
        utility.vending(read,V);
        //read.close();
    });
}

vending();