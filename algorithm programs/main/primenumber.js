var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primeNumber()
{
    read.question("enter min value: ",function(a)
    {
     read.question("enter max value",function(b)
     {   
        var min=parseInt(a);
         var max=parseInt(b);
        utility.primeNumber(min,max);
        read.close();
     });
    }
);
}

primeNumber();