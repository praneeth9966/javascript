var read=require('readline-sync');
var util=require('../utility/Banking.js');


function banking()
{
    var input=read.question("Enter the number of persons: ");
    util.banking(read,input);
}
banking();