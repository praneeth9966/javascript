var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
/*'use strict'
const args=require('yargs').argv;*/

function monthlypayment()
{
    read.question("enter principle: ",function(P)
    {
        read.question("enetr years: ",function(Y){
            read.question("enter percent: ",function(R){
            utility.monthlypayment(P,Y,R);
            read.close();
            });
        });
    });
    /*P=args.principle;
    Y=args.years;
    R=args.percent;
    utility.monthlypayment(P,Y,R);*/
}

monthlypayment();