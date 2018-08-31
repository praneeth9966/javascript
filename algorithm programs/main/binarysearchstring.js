/*var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
var arr=[];
function binarystring()
{
    read.question("enter size: ",function(size)
    {
        array(size);
    });
}
array = function(size)
{
    if(size==0)
    {
        read.question("enter string to be searched: ",function(string)
        {
            utility.binarystring(arr,string);
        });
    }
    else
    {
        read.question("enter a value: ",function(string)
        {
            arr.push(string);
            array(--size);
        });
    }
}
binarystring();*/
var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function binarystring() {
    var row=prompt('enter no of rows: ');
    utility.binarystring(row);
    }
    binarystring();
