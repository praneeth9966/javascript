/***************************************************** 
 *  Execution : 1.default node
 *  Purpose   : Learning Functional Programs
 *  @description
 *  @file     : utility.js
 *  @overview : string.js, coin.js, leapyear.js, powerof2.js, harmonic.js, factors.js, gambler.js, couponnew.js, 2darray.js, triplets.js, distance.js, permutations.js, stopwatch.js, tictactoe.js, quadratic.js, windchill.js
 *  @module   : utility
 *  @author   : BridgeLabz <Praneeth Kunapareddy>
 *  @version  : 1.0
 *  @since    : 20-aug-2018
******************************************************/
const la=require("lodash")
module.exports={
            /** Replace String :
             * @param - userinput taking from user 
             * @description - it takes userinput and print the string with userinput
            */ 
    hello : function(userinput)
    {
        if(userinput.length>=3) //userinput should be atleast 3 characters
        {
            console.log("hey "+ userinput +"! how are you");
        }
            else
            {
                console.log("please enter userinput minimum 3 characters");
            }
    },
            /** Leap Year :
             * @param - year taking from the user
             * @description - Determine if it is leap year and print the year is Leap year 
             *                 or Not
            */
    leap : function(year)
    {
        if(year.length==4) //year should be compulsary 4 digit number 
        {
            if(year%4==0 && year%100!=0 || year%400==0)//year should be evenly divisible by 4
                                                   //  AND year should not evenly divisible by 100
                                                   //OR year should evenly divisible by 400
            {
                console.log("it is a leap year");
            }
            else
            {
                console.log("not a leap year");
            }
        }
        else
        {
            console.log("plz enter 4 digit no");
        }
    },
          /** Flip Coin
           * @param - userinput taking from the user
           * @description -Use Random Function to get value between 0 and 1. If < 0.5 then tails or
           *                heads
           */
flip : function(userinput)
{
    let n=0,head=0,tail=0;
       
    for(let i=1;i<=userinput;i++)
    {
        n=Math.random();//this function returns a floating point,
                        //pseudo random number between 0 and 1
        console.log("the random outputs are:"+n);
        if(n>=0.5)
        {
           head++;
        }
        else
        {
            tail++;
        }
    }
    console.log("no of heads is :"+head);
    console.log("no of tails is :"+tail);
    let hp=(head/userinput)*100;
    console.log("the head% is :"+hp+"%");
    var tp=(tail/userinput)*100;
    console.log("the tail% is :"+tp+"%");
},
            /** Power Of 2
             * @param - userinput taking from the user
             * @description - it will print the power values of 2 upto to the userinput given by user
            */
power : function(userinput)
{
    if(userinput<=30)
    {
        for(let i=0;i<=userinput;i++)
        {
            let x=Math.pow(2,i);// this function is used to power of a number 
                            //Math.pow(base,exponent)
   
            console.log("2^"+i+"="+x)
        }
    }
    else
    {
     console.log("stack overflow");
    }
},
            /** Harmonic Number
             * @param - num taking from the user
             * @description - it will print the Nth harmonic value
            */
harmonicno : function(num)
{
    let res=1;
    if(num!=0)//number should be compulsary greater than zero
    {
        for(let i=1;i<=num;i++)
        {
            res=res*i;
        }
            let sum=0;
            for(let j=1;j<=num;j++)
            {
                sum=sum+res/j;
            }
                var finalres=sum/res;
                console.log("final result is "+finalres);
                console.log(sum+"/"+res);
    }
    else
    {
        console.log("please enter gtreater than zero");
    }
},
             /** Factors
              * @param - num taking from the user
              * @description - print the prime factors of num
              */
primefactor : function(num)
{
    var res='';
    while(num%2==0)
    {
        res=res+2+' ';
        num=num/2;
    }
        for(let i=3;i*i<=num;i=i+2)
        {
            while(num%i==0)
            {
                res=res+i+' ';
                num=num/i;
            }
        }
                if(num>2)
                {
                    res=res+num+'';
                }
                    console.log(res);
},
              /** Gambler
                * @param - userinput,stake,goal taking from the user 
                * @description - Play till the gambler is broke or has won
                *                Print Number of Wins and Percentage of Win and Loss.
                */
gamblerp : function(userinput,stake,goal)
{
    let win=0,loss=0;
    if(stake<goal && stake>0)//stake should be greater than zero and less than goal
    {
    
        for(let i=1;i<=userinput;i++)
        {
            
                let n=Math.random();
        
                if(n>=0.5)
                {
                    win++;
                    stake++;
                }
                else
                {
                    loss++;
                    stake--;
                }
            
             
         }
         console.log(stake);
         console.log("no of times win:"+win);
         
         var lp=(loss/userinput)*100;// calculating loss percentage
         console.log("the loss% is :"+lp+"%");
         var wp=(win/userinput)*100;           // calculating win percentage           
         console.log("the win% is :"+wp+"%");
    }
    else
    {
        console.log("cant play more");
    }
    
},
             /** Quadratic
               * @param - a,b,c taking from the user 
               * @description - Take a, b and c as input values to find the roots of x.
               */

quadraticf : function(a,b,c)
{
    let delta=Math.pow(b,2)-4*a*c;// this function is used to power of a number 
                                  //Math.pow(base,exponent)

    console.log("value of delta is:"+delta);
    if(delta>0)
    {
        let res1=(((-1*b) + Math.sqrt(delta))/(2*a));// return the square root of a number
        let res2=(((-1*b) - Math.sqrt(delta))/(2*a));
        console.log(res1);
        console.log(res2);
    }
    else
    {
        console.log("imaginary roots");
    }   
},
            /** Distance
              * @param - x,y taking from the user
              * @description - takes two integer command­line arguments x
              *                and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0).
              */
distancep : function(x,y)
{
    let d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));// return the square root of a number
    console.log("distance between x and y:"+d);
},
            /** WindChill
              * @param - t,v taking from the user
              * @description - Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
              *                the National Weather Service defines the effective temperature (the wind chill) to be
              *                Note : the formula is not valid if t is larger than 50 in absolute value or if v is larger
              *                than 120 or less than 3 (you may assume that the values you get are in that range).
              */
windchill : function(t,v)
{
    var t,v,w,a;
    a=Math.pow(v,0.16);// this function is used to power of a number 
                       //Math.pow(base,exponent)

    if(t<50 && v<120 && v>3)
    {
        w=35.74+0.6215*t+(0.4275*t-35.75)*a;
        console.log("windchill is:"+w);
    }
    else
    {
        console.log("invalid input");
    }
},
            /** Coupon Numbers
              * @param - min,max taking from the user
              * @description - Given N distinct Coupon Numbers, how many random numbers do you
              *                need to generate distinct coupon number? This program simulates this random
              *                process.
              */
couponnonew : function(min,max)
{
  var random=[],count,element;
  for(count=min;count<max;count++)
  {
      element=la.random(min,max);
      random.push(element);
  }
        console.log(random);
        console.log("no of coupons generated= "+random.length);
        var distinct=new Set(random);
        console.log(distinct);
        console.log("no of distinct coupons= "+[...distinct].length);
  
  

},
             /** StopWatch Program
               * @param - startTime 1 and stopTime 0 taking as input 
               * @description - Write a Stopwatch Program for measuring the time that elapses between
               *                 the start and end clicks           
               */

    getCurrentTime : function()
    {
        var d=new Date();// systems date
        var n=d.getTime();// systems current time
        return n;   
    },
   getElapsedTime : function(startTime,stopTime)
   {
       
       var elapsed=(stopTime-startTime)/1000;
      return elapsed;
       
   },
               /** 2D Array
                 * @param - row taking from the user
                 * @description - Print function to print 2 Dimensional Array.
                 */
   array : function(row)
   {
       var prompt=require('prompt-sync')();
       let arr=new Array(row);// creating new array with row size
       var coloum=prompt('enter no of coloums');
        for(let i=0;i<row;i++)
        {
            arr[i]=new Array(coloum);
            for(let j=0;j<coloum;j++)
            {
                arr[i][j]=prompt('enter element');
            }
        }

        console.log(arr);
   },
             /** SZum Of Three integers add to Zero
               * @param - row taking from the user
               * @description - A program with cubic running time. Read in N integers and counts the
               *                number of triples that sum to exactly 0.
               */
   triplet : function(row)
   {
       var prompt=require('prompt-sync')();
       var arr=new Array(row);// creating array
       var arr1=new Array();
       var count=0;
       var res='';
       for(let i=0;i<row;i++)
       {
           arr[i]=prompt('enter element :');
       }
       console.log(arr);
      
       for(let i=0;i<arr.length;i++)
       {
           for(let j=i+1;j<arr.length;j++)
           {
               for(let k=j+1;k<arr.length;k++)
               {
                var sum=Number(arr[i])+Number(arr[j])+Number(arr[k]);
                    if(sum==0)
                    {
                    count++;
                    arr1.push(arr[i]+','+arr[j]+','+arr[k]);// add items to the end of the array
                                                           // and returns the new length
                    }
               }
           }
       }
      /* function removeDuplicates(arr)
       {
           let uniquearray=[];
           for(let i=0;i<arr.length;i++)
           {
               if(uniquearray.indexOf(arr[i])==-1)
               {
                   uniquearray.push(arr[i]);
               }
           }
           return uniquearray;
       }
       console.log(removeDuplicates(arr1));
       console.log(removeDuplicates(arr1).length);*/
       var distinct=new Set(arr1);
       console.log("distinct triplets= "+[...distinct]);// printing all unique triplets of set
       console.log("total no of triplets= "+[...distinct].length);//printing unique triplets length
       
   },
               /**
                 * @param - str taking from the user
                 * @description - to return all permutations of a string
                 */
   doPerm : function(str)
   {
       var a,z,A,Z;
       if((str>='a' && str<='z') ||(str>='A' && str<='Z'))
       {
            var permutations = [];
            doPerm1(str, []);
            console.log(permutations);
  

            function doPerm1(str, arr) 
            {    
                if (typeof (str) == 'string') 
                 str = str.split('');// splitting string into characters
                if (str.length == 0) 
                 permutations.push(arr.join(''));
                for (var i = 0; i < str.length; i++) 
                {
                    var x = str.splice(i, 1);// it will remove one element from index i
                    arr.push(x);// it will add items to the end of the array
                    doPerm1(str, arr);
                    arr.pop();//it removes last element from array and returns that element
                    str.splice(i, 0, x);// from index i it will add x
                }
    
            }
        }
        else
        {
            console.log("please enter string");
        }
   }

}
