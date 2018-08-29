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
    read.question("enter a no:",function(num)
    {
        
        utility.harmonicno(num);
        read.close();
    }
);
}

harmonicno();