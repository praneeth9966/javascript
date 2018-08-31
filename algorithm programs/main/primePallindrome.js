var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primePallindrome()
{
    read.question("enter n value: ",function(x)
    {
        
        utility.primePallindrome(x);
        read.close();
    }
);
}

primePallindrome();