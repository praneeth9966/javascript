var fs = require('fs');
var prompt=require('prompt-sync')();
var data = fs.readFileSync('RegularExpression.txt');
data=data.toString();
var name=prompt('enter the name: ');
var strings=/[a-zA-Z]/g;
var integers=/[0-9]/g
var specialchar=/[!@#$%^&*()+?><]/g;
if(name.search(integers)==-1 && name.search(specialchar)==-1)
{
var str=data.replace(/<<name>>/g,name);
}
else
{
    console.log("please enter valid name");
    process.exit();
}
var fullname=prompt('enter the full name: ');
if(fullname.search(integers)==-1 && fullname.search(specialchar)==-1)
{
    var str1=str.replace(/<<full name>>/g,fullname);
}
else
{
    console.log("please enter valid input");
    process.exit();
}
var phnno=prompt('enter the phone no: ');
if(phnno.length==10)
{
if(phnno.search(strings)==-1 && phnno.search(specialchar)==-1)
{
    var str2=str1.replace(/91­xxxxxxxxxx/g,phnno);
    
}
else
{
    console.log("please enter valid input");
    process.exit();
}
}
else
{
    console.log("please enter valid phone number");
    process.exit();
}

var date=new Date();
var newdate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
//console.log(newdate);
var str3=str2.replace(/01-01-2016/g,newdate);
console.log(str3);
