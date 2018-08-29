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
    read.question("enter minimum no:",function(min)
    {
        read.question("enter maximum no:",function(max){
            read.question("enter the no of coupons:",function(num){
        utility.couponno(min,max,num);

        
        utility.couponno(userinput);
        read.close();
            });
        });
    }
);
}

couponno();