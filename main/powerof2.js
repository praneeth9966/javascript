//var readLine=require('readline');
var utility=require('../utility/utility.js');
/*var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);*/
'use strict'
const args=require('yargs').argv;

function power()
{
/*read.question("enter the power value of n:",function(userinput)
    {
        
        utility.power(userinput);
        read.close();
    }
);*/
n=args.userinput;
utility.power(n);
}

power();