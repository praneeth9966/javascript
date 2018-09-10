var fs = require('fs');
var readline = require('readline')
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


var data = fs.readFileSync('hash.txt');
data= data.toString().split(' ');
//console.log(data);

function hashing()
{
    read.question("Enter the element to be searched: ", function(ele){
        utility.hashing(data,ele);
        read.close();
    });
}
hashing();
