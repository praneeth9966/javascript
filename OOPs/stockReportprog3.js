/*class Stock
{
    constructor(stock_name,number_of_share,share_price) {
        this.stock_name=stock_name;
        this.number_of_share=number_of_share;
        this.share_price=share_price;
    }
}
var stock1=new Stock("pulsar220",10,100);
var stock2=new Stock("duke",20,200);
var stock3=new Stock("ns200",30,300);
//console.log(stock1);
console.log("the stock1 name is: "+stock1.stock_name);
console.log("the stock1 number of shares is: "+stock1.number_of_share);
console.log("the stock1 share price is: "+stock1.share_price);
var stock1price=stock1.number_of_share*stock1.share_price;
console.log("the stock1 total share price is: "+stock1price+"\n");

console.log("the stock2 name is: "+stock2.stock_name);
console.log("the stock2 number of shares is: "+stock2.number_of_share);
console.log("the stock2 share price is: "+stock2.share_price);
var stock2price=stock2.number_of_share*stock2.share_price;
console.log("the stock2 total share price is: "+stock2price+"\n");

console.log("the stock3 name is: "+stock3.stock_name);
console.log("the stock3 number of shares is: "+stock3.number_of_share);
console.log("the stock3 share price is: "+stock3.share_price);
var stock3price=stock3.number_of_share*stock3.share_price;
console.log("the stock3 total share price is: "+stock3price+"\n");

var totalprice=stock1price+stock2price+stock3price;
console.log("the total value of stock is: "+totalprice);*/



'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('stock.json');  
let stockreport = JSON.parse(rawdata);
console.log(stockreport);
var num1=stockreport.stock1.price;
var num2=stockreport.stock1.number_of_share;
var result1=num1*num2;
console.log("the total price of stock1 is: "+result1);

var num3=stockreport.stock2.price;
var num4=stockreport.stock2.number_of_share;
var result2=num3*num4;
console.log("the total price of stock2 is: "+result2);

var num5=stockreport.stock3.price;
var num6=stockreport.stock3.number_of_share;
var result3=num5*num6;
console.log("the total price of stock3 is: "+result3);
var result4=result1+result2+result3;
//console.log(r4);
console.log("the total stock price is: "+result4);
