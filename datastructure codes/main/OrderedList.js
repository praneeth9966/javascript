var fs = require('fs');
var readline = require('readline')
var utility=require('../utility/OrderedLinkedList.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


var data = fs.readFileSync('file1.txt');
data= data.toString().split(' ');
//console.log(data);

function orderedList()
{
    read.question("Enter the element to be searched: ", function(num){
        utility.orderedList(data,num);
        read.close();
    });
}
orderedList();
