var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function couponnonew()
{
    read.question("enter minimum no:",function(min)
    {
        read.question("enter maximum no:",function(max){
            
        utility.couponnonew(min,max);

        
        
        read.close();
            
        });
    }
);
}

couponnonew();