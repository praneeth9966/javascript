var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js');
function triplet()
{
    var row=prompt('enter no of integers:');
    utility.triplet(row);
}
triplet();