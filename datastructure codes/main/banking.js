var read=require('readline-sync');
var util=require('../utility/queue.js');


function banking()
{
    var input=read.question("Enter the number of persons: ");
    util.banking(read,input);
}
banking();