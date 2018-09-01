var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function temperature()
{
    read.question("enter 1 to convert  a celsius to Fahrenheit and 2 to convert vice-versa: ",function(option)
    {
            utility.temperature(read,option);
            
        
    });
}

temperature();