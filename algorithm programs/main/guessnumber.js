var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function guessnumber()
{
    read.question("enter a number: ",function(n)
    {
        var range=Math.pow(2,n);
        console.log(range);
        console.log("think of a number between 0 and: "+range);
    var res=utility.guessnumber(0,range);
    console.log(res+" "+"is the number");
            read.close();
    });
}

guessnumber();