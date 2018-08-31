var fs=require('fs');
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var data=fs.readFileSync('files.txt');
data=data.toString().split(',');
function binarywordlist()
{
    read.question("enter the element to search: ",function(element)
    {
        utility.binarywordlist(data,element);
        read.close();
    });
}
binarywordlist();