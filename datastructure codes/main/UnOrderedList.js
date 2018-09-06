var fs = require('fs');
var readline = require('readline')
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


var data = fs.readFileSync('file.txt');
data= ((data.toString()).toLocaleLowerCase()).split(' ');
//console.log(data);

function unorderedList()
{
    read.question("Enter the element to be searched: ", function(ele){
        utility.unorderedList(data,ele);
        read.close();
    });
}
unorderedList();
