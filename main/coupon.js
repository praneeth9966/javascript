var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function couponno()
{
    read.question("enter your coupons:",function(userinput)
    {
        
        utility.couponno(userinput);
        read.close();
    }
);
}

couponno();