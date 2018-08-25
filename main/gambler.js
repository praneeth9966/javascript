var readLine=require('readline');
var utility=require('../utility/utility.js');
var read=readLine.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function gamblerp()
{
    read.question("enter a no :",function(userinput)
    {
        read.question("enter a stake:",function(stake)
        {
            read.question("enter a goal:",function(goal)
            {
        utility.gamblerp(userinput,stake,goal);
        read.close();
            });
        });
        }
    
    );
    

}

gamblerp();