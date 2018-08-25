var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function hello()
{
    read.question("enter your name:",function(userinput)
    {
        
        utility.hello(userinput);
        read.close();
    }
);
}

hello();