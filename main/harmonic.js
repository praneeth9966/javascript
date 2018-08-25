var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function harmonicno()
{
    read.question("enter a no:",function(userinput)
    {
        
        utility.harmonicno(userinput);
        read.close();
    }
);
}

harmonicno();