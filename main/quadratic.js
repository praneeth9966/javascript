var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function quadraticf()
{
    read.question("enter value of a:",function(a)
    {
        read.question("enter value of b:",function(b){
            read.question("enter value of c:",function(c){
        
        utility.quadraticf(a,b,c);
        read.close();
            });
        });
    }
);
}

quadraticf();