var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function anagram()
{
    read.question("enter a first string: ",function(str1)
    {
        read.question("enetr a second string: ",function(str2){
            utility.anagram(str1,str2);
            read.close();
        });
    });
}

anagram();