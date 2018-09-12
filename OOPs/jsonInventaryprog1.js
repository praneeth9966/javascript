'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('inventory.json');  
let inventory = JSON.parse(rawdata);
console.log(inventory);
var num1,num2;
for(var i=0,j=0;i<inventory.rice.weight.length,j<inventory.rice.price.length;i++,j++)
{
    num1 = inventory.rice.weight[i];
    num2 = inventory.rice.price[j];
    console.log("the total price of "+ inventory.rice.name[i]+" rice is: "+num1*num2);
}
for(var i=0,j=0;i<inventory.pulses.weight.length,j<inventory.pulses.price.length;i++,j++)
{
    num1 = inventory.pulses.weight[i];
    num2 = inventory.pulses.price[j];
    console.log("the total price of "+ inventory.pulses.name[i]+" is "+num1*num2);
}
for(var i=0,j=0;i<inventory.wheats.weight.length,j<inventory.wheats.price.length;i++,j++)
{
    num1 = inventory.wheats.weight[i];
    num2 = inventory.wheats.price[j];
    console.log("the total price of "+ inventory.wheats.name[i]+" is "+num1*num2);
}
 