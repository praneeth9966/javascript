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

function dayofweek()
{
    read.question("enter month: ",function(month)
    {
        read.question("enetr day: ",function(day){
            read.question("enter year: ",function(year){
                var m=parseInt(month);
                var d=parseInt(day);
                var y=parseInt(year);
            utility.dayofweek(m,d,y);
            read.close();
            });
        });
    });
    /*P=args.principle;
    Y=args.years;
    R=args.percent;
    utility.monthlypayment(P,Y,R);*/
}

dayofweek();