var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function windchill()
{
    read.question("enter value of t:",function(t)
    {
        read.question("enter value of v:",function(v){
            
        utility.windchill(t,v);
        read.close();
            
        });
    }
);
}

windchill();