var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primeanapal()
{
     
        utility.primeanapal(1,1000);
        read.close();
}

primeanapal();