/***************************************************** 
 *  Execution : 1.default node
 *  Purpose   : Learning Algorithm Programs
 *  @description
 *  @file     : utility.js
 *  @overview :anagram.js,primenumbers.js,primeanapal.js,test.js,guessnumber.js,binarysearchwordlist.js,InsertionSort.js,BubbleSort.js,MergeSort.js,vendingmachine.js,dayOfWeek.js,temperatureConversion.js,monthlyPayment.js,newtonsqrt.js,binarytodecimal,binarynibbles.js
 *  @module   : utility
 *  @author   : BridgeLabz <Praneeth Kunapareddy>
 *  @version  : 1.0
 *  @since    : 30-aug-2018
******************************************************/
module.exports=
{
    /** An Anagram Detection
     * @param - str1 and str2 taking from the user
     * @description - The two strings are Anagram or Not
     */
    anagram : function(str1,str2)   
    {
        var y = str1.toLowerCase().split("").sort().join('');
        var z = str2.toLowerCase().split("").sort().join('');
        if(y.length===z.length) // here checking str1 and str2 lengths are equal are not 
                                // if equal it will go inside the loop otherwinse it goes to else  
        {
                if (y===z)// here checking characters in str1 and str2 are equal are not
                {
                    console.log(str1 + " and " + str2 + " are anagrams!");
                
                }
                    else 
                    {
                        console.log(str1 + " and " + str2 + " are not anagrams.");
                   
                    }
        }
        else 
        {
            console.log(str1 + " has a different amount of letters than " + str2);
        }
        
    
    },
              /** Prime Number Range
                * @param - min amd max value taking from the user
                * @description - Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
                */     
    primeNumber : function(min,max)
    {
        primeArray=[];
        var cn,count;
        for(let i=min;i<=max;i++)
        {
            cn=i;
            count=0;
            for(let j=1;j<=cn;j++)
            {
                if(cn%j==0)
                {
                    count++;
                }
            }
                    if(count==2)
                    {
                        primeArray.push(cn);
                        console.log(""+cn);
                    }
        }
        return(primeArray);
    },

    primePallindrome : function(x)
    {
        console.log("primePallindromes numbers from o t0: "+x +"are");
        for(var i=1;i<x;i++)
        {
            var n=i;
            var a=n;
            var m=0;
		    while(n>0)
		    {
                m=(Math.floor(m*10)+(n%10));
                n=(Math.floor(n/10));
		    }
		        if(a==m)
		        {
                    var cn=m;
                    var count=0;
                    for(var j=1;j<=cn;j++)
                    {
                        if(cn%j==0)
                        {
                            count++;
                        }
                    }
                        if(count==2)
                        {
                            console.log(cn);
                        }
                }
        }        
    }, 
    primeanagram : function(min,max)
    {
        var arr=[];
        var cn,count;
        for(let i=min;i<=max;i++)
        {
            cn=i;
            count=0;
            for(let j=1;j<=cn;j++)
            {
                if(cn%j==0)
                {
                    count++;
                }
            }
                    if(count==2)
                    {
                        arr.push(cn);
                    }
        }
        var arr1=[];
        console.log("Anagrams between min and "+max +"are");
        for(let i=min;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
            {
                var a1=''+parseInt(arr[i]);
                var a2=''+parseInt(arr[j]);
                if((((a1.split('')).sort()).join())===(((a2.split('')).sort()).join()))
                {
                    console.log(a1+" & "+a2);
                    arr1.push(parseInt(a1));
                }
            }
        }
    },
            /** Prime numbers that are Pallindrome and Anagram
              * @param - min and max value taking from the user
              * @description - prime numbers between 0 and 1000 and that are pallindrome and anagram
              */
    
    primeanapal : function(min,max)
    {
        var pallindrome=[];
        var primeArray=[];
        primeArray=this.primeNumber(min,max);
        console.log(primeArray);
        for(var i=0;i<primeArray.length;i++)
        {
            if(primeArray[i]==this.reverseNum(primeArray[i]))
            {
                pallindrome.push(primeArray[i]);
            }
        }
        console.log("prime numbers between 1 and 1000: "+primeArray);
        console.log("prime numbers between 1 and 1000 that are pallindrome: "+pallindrome);
        console.log("Anagram pairs are: ");
        for(var k=0;k<primeArray.length;k++)
        {
            for(var j=k+1;j<primeArray.length;j++)
            {
                var num1=((primeArray[k].toString()).split("")).sort();
                var num2=((primeArray[j].toString()).split("")).sort();
                var n1=num1.join("");
                var n2=num2.join("");
                if(n1==n2)
                {
                    console.log("pair ("+primeArray[k]+","+primeArray[j]+")");
                }
            }
        }
        
    },

    reverseNum : function(number)
    {
        var rev=0;
        var digit;
        while(number>0)
        {
            digit=number%10;
            rev=rev*10+digit;
            number=(number-digit)/10;
        }
        return(rev);
    },
        /** binary search method for integer
          * @param - size taking from the user
          * @description - Check using Stopwatch the Elapsed Time for method call
          */
    
    binary :function(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        var a=0;
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the numbers: ");
        }
        var a=/[a-zA-Z]/g;
        var b=/[0-9]/g;
        var c=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
            {
                count++;
            }
        }

            if(count==arr.length)
            {
                arr.sort(function(a,b){
                return a-b;
                });
                console.log(arr);
                var first=0,last=size-1;
                var value=prompt("enter the element to search: ");
                while(first<=last)
                {
                    var mid=Math.floor((first+last)/2);
                    if(value==arr[mid])
                    {
                        a=1;
                        break;
                    }       
                    else
                    {       
                        if(value>arr[mid])
                        {
                            first=mid+1;
                        }
                        else
                        {
                            last=mid-1;
                        }
                    }
                }
                        if(a==1)
                        {
                            console.log("element found at index: "+mid);
                        }
                        else
                        {
                            console.log("element not found");
                        }
            }
                else
                {
                    console.log("please enter integer");
                } 
    },
                /** binary search method for string
                  * @param - size taking from the user
                  * @description - Check using Stopwatch the Elapsed Time for method call
                  */
    
    binarystring :function(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        var a=0;
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the strings: ");
        }
        var a=/[a-zA-Z]/g;
        var b=/[0-9]/g;
        var c=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
            {
                count++;
            }
        }

            if(count==arr.length)
            {
                arr.sort(function(a,b){
                return a-b;
                });
                console.log(arr);
                var first=0,last=size-1;
                var str=prompt("enter the string to search: ");
                while(first<=last)
                {
                    var mid=Math.floor((first+last)/2);
                    if(str==arr[mid])
                    {
                        a=1;
                        break;
                    }
                    else
                    {
                        if(str>arr[mid])
                        {
                            first=mid+1;
                        }
                        else
                        {
                            last=mid-1;
                        }
                    }
                }
                    if(a==1)
                    {
                        console.log("string found at index: "+mid);
                    }
                    else
                    {
                        console.log("string not found");
                    }
            }
            else
            {
                console.log("please enter string");
            }
    },
      /** insertionsort method for integer
        * @param - size taking from the user
        * @description - Check using Stopwatch the Elapsed Time for every method call
        */
    
    insertionsortInteger : function(size)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter numbers: ");
                
            }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

                if(count==arr.length)
                {
                    console.log(arr);
                    this.insertionInt(arr);
            
                    arr.forEach(element =>
                    {
                        console.log(element);
                    });
                }       
                else
                {
                    console.log("please enter integer");
                }        
    },
    insertionInt : function(arr)
    {
        for(let i=1;i<arr.length;i++)
        {
            var key=parseInt((arr[i]));
            var j=i-1;
                while(j>-1 && arr[j]>key)
                {
                    arr[j+1]=parseInt(arr[j]);
                    j--;
                }
                    arr[j+1]=key;
        }
    },
        /** insertionsort method for strings
          * @param - size taking from the user
          * @description - Check using Stopwatch the Elapsed Time for method call
          */
    
    insertionsortString : function(size)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter strings: ");
                
            }
                var a=/[a-zA-Z]/g;
                var b=/[0-9]/g;
                var c=/[!@#$%^&*()<>+-/"'?]/g;
                var count=0;
            
                 for(var i=0;i<arr.length;i++)
                 {
                    if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
                    {
                        count++;
                    }
                 }

        if(count==arr.length)
        {
            console.log(arr);
            this.insertionString(arr);
            for(var i=0;i<arr.length;i++)
            {
                console.log("inside if n for "+arr[i]);
            }
            arr.forEach(element =>
                {
                    console.log(element);
                });
        }
        else
        {
            console.log("please enter string");
        }        
    },
    insertionString : function(arr)
    {
        for(let i=1;i<arr.length;i++)
        {
            var key=((arr[i]));
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=(arr[j]);
                j--;
            }
            arr[j+1]=key;
        }
    },

        /** bubblesort method for integer
          * @param - size taking from the user
          * @description - Check using Stopwatch the Elapsed Time for method call
          */
    
    bubblesortInteger : function(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter numbers: ");
            
        }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

        if(count==arr.length)
        {
        console.log(arr);
        this.bubbleInt(arr);
        arr.forEach(element =>
            {
                console.log(parseInt(element));
            });  
        }
        else
        {
            console.log("please enter integer");
        }
    },
    bubbleInt : function(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(parseInt(arr[j])>parseInt(arr[j+1]))
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
    },
        /** bubblesort method for strings
          * @param - size taking from the user
          * @description - Check using Stopwatch the Elapsed Time for method call
          */
    
    bubblesortString : function(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter strings: ");
            
        }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

        if(count==arr.length)
        {
        console.log(arr);
        this.bubbleString(arr);
        arr.forEach(element =>
            {
                console.log(element);
            });  
        }
        else
        {
            console.log("please enter string");
        }
    },
    bubbleString : function(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    },
       /** Binary Search the Word from Word List
         * @param - value taking from the user
         * @description - Read in a list of words from File. Then prompt the user to enter a word to
         *                search the list. The program reports if the search word is found in the list.
         */
    
    binarywordlist : function(arr,value)
    {
        arr=arr.sort();
        console.log(arr);
        var first=0,last=arr.length-1;
        while(first<=last)
        {
            var mid=Math.floor((first+last)/2);
            if(value==arr[mid])
            {
                a=1;
                break;
            }
            else
            {
                if(value>arr[mid])
                {
                    first=mid+1;
                }
                else
                {
                    last=mid-1;
                }
            }
        }
        if(a==1)
        {
            console.log("element found at index: "+mid);
        }
        else
        {
            console.log("element not found");
        }
       
    },

        /** Bubble Sort
          * @param - size taking from the user
          * @description - Reads in integers prints them in sorted order using Bubble Sort
          */
      
    bubbleSort : function(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter elements: ");
            
        }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

                    var flag=false;
                    if(count==arr.length)
                    {
                        console.log(arr);
                        this.bubble(arr);
                        arr.forEach(element =>
                        {
                            console.log(parseInt(element));
                            flag=true;
                        });
                        
                    }        
                        else
                        {
                            console.log("please enter integers");
                            process.exit();
                        }
                        if(flag)
                        process.exit();
                        
    },
    bubble : function(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(parseInt(arr[j])>parseInt(arr[j+1]))
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
        //return arr;
        //console.log(arr);
    },
        /** Insertion Sort
          * @param - size taking from the user
          * @description - Reads in strings from standard input and prints them in sorted order.
          */
      
    InsertionSort : function(size)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }
                var flag=false;
        if(count==arr.length)
        {
            console.log(arr);
            this.insertion(arr);
            
            arr.forEach(element =>
                {
                    console.log(element);
                    flag=true;
                });
            }
            else
            {
                console.log("please enter a string");
                process.exit();
            }    
            if(flag)
            process.exit();     
    },
    insertion : function(arr)
    {
        for(let i=1;i<arr.length;i++)
        {
            var key=((arr[i]));
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=(arr[j]);
                j--;
            }
            arr[j+1]=key;
        }
    },
        /** Merge Sort
          * @param - size taking from the user
          * @description - To Merge Sort an array, we divide it into two halves, sort the two halves
          *                independently, and then merge the results to sort the full array.
          */

    mergeSort : function(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
            for(let i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
            this.merge((arr));
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
                process.exit();
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
            for(i=0;i<a1.length;i++)
            {
                a1[i]=parseInt(arr[i]);
            
            }
                for(var j=0;j<a2.length;j++,i++)
                {
                    a2[j]=parseInt(arr[i]);
            
                }
        this.merge(a1);// divinding
        this.merge(a2);//dividing
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)// merging
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },

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
        /** temperaturConversion
          * @param - option taking from the user
          * @description -  given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa using the
          *                 formula
          */
      
    temperature : function(read,option)
    {
        switch(option)
        {
            case '1':
                         read.question("enter temperature in celsius: ",function(temp)
                         {
                             var f=Math.floor(temp*(9/5)+32)
                             console.log("the fahrenheit temperature is: "+f);
                             read.close();
                         });
                         break;
            case '2':  
                            read.question("enter temperature in fahrenheit: ",function(temp)
                            {
                                var c=Math.floor((temp-32)*(5/9));
                                console.log("the celsius temperature is: "+c);
                                read.close();
                            });
                            break;       
        
        }
    },
    /** monthlyPayment
      * @param - P,Y,R taking from the user
      * @description -to calculate monthlyPayment that reads in three 
      *               command­line arguments P, Y, and R and calculates the monthly payments you
      *               would have to make over Y years to pay off a P principal loan amount at R per cent
                      interest compounded monthly.                 
      */
      
    monthlypayment : function(P,Y,R)
    {
        var payment,n,x;
        n=12*Y;
        r=R/(12*100);
        x=1+r;
        payment=(P*r)/(1-Math.pow(x,(-n)));
        console.log("monthly payment is: "+payment);
    },
        /** dayOfWeek
          * @param - m,d,y taking from the user
          * @description - takes a date as input and
                           prints the day of the week that date falls on. 
          */
          
    dayofweek : function(m,d,y)
    {
        var y1,x,m1,d1,z;
        z=(14-m);
       y1=y-Math.floor(z/12);
        x=y1+Math.floor(y1/4)-Math.floor(y1/100)+Math.floor(y1/400);
        m1=m+12*(Math.floor(z/12))-2;
        d1=Math.floor((d+x+((31*m1)/12))%7);
       
        switch(d1)
        {
            case 0:   console.log("sun");
                        break;
            case 1:   console.log("mon");
                        break;
            case 2:   console.log("tues");
                        break;
            case 3:   console.log("wed");
                        break;
            case 4:   console.log("thu");
                        break;
            case 5:   console.log("fri");
                        break;
            case 6:   console.log("sat");
                        break;

        }
    },
        /** Vending Machine
          * @param - amount taking from the user
          * @description - There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
                          returned by Vending Machine. Write a Program to calculate the minimum number
                          of Notes as well as the Notes to be returned by the Vending Machine as a
                          Change
          */
      
    vending : function(read,amount)
    {
        var amount,count=0;
        a=1;
        switch(a)
        {
            case 1: if(amount/1000>=1)
                    {
                        var n=Math.floor(amount/1000);
                        console.log("the number of $1000 notes"+n);
                        amount=amount-(n*1000);
                        count+=n;
                    }
            case 2: if(amount/500>=1)
                    {
                        var p=Math.floor(amount/500);
                        console.log("the number of $500 notes"+p);
                        amount=amount-(p*500);
                        count+=p;
                    }
            case 3: if(amount/100>=1)
                    {
                        var q=Math.floor(amount/100);
                        console.log("the number of $100 notes"+q);
                        amount=amount-(q*100);
                        count+=q;
                    }
                     
            case 4: if(amount/50>=1)
                    {
                        var r=Math.floor(amount/50);
                        console.log("the number of $50 notes"+r);
                        amount=amount-(r*50);
                        count+=r;
                    }

            case 5: if(amount/10>=1)
                    {
                        var s=Math.floor(amount/10);
                        console.log("the number of $10 notes"+s);
                        amount=amount-(s*10);
                        count+=s;
                    }

            case 6: if(amount/5>=1)
                    {
                        var t=Math.floor(amount/5);
                        console.log("the number of $5 notes"+t);
                        amount=amount-(t*5);
                        count+=t;
                    }


            case 7: if(amount/2>=1)
                    {
                        var u=Math.floor(amount/2);
                        console.log("the number of $2 notes"+u);
                        amount=amount-(u*2);
                        count+=u;
                    }


            case 8: if(amount/1>=1)
                    {
                        var v=Math.floor(amount/1);
                        console.log("the number of $1 notes"+v);
                        //amount=amount-(v*1);
                        count+=v;
                    }
        }
        count=parseInt(count);
        console.log("the minimum no of notes to return the change by machine: "+count);
        read.close();
    },
            /** square root of a nonnegative number
          * @param - c taking from the user
          * @description -  sqrt to compute the square root of a nonnegative number c
          *                given in the input using Newton's method:
          */
      
    newtonsqrt : function(c)
    {
        var t=c;
        var epsilon=1e-15;
        while(Math.abs(t-(c/t))>epsilon*t)
        {
                
                t=((c/t)+t)/2;
        }
        console.log("the square root of number is: "+t);
    },
        /** toBinary
          * @param - n taking from the user
          * @description - converting decimal to binary
          */
      
   toBinary : function(n) 
    {
        if(n==0)
        {
            console.log(0);
        }
        else
        {
            var arr=[],i;
        }
        for(var i=0;n>0;i++)
        {
            arr[i]=Math.floor(n%2);
            n=Math.floor(n/2);
        }
        console.log("\n Binary of given number is: ");
        console.log(arr.reverse());//reversing the array and printing the elements in that array
    },
        /** binaryNibbles
          * @param - n taking from the user
          * @description - Swap nibbles and find the new number.
          *                Find the resultant number is the number is a power of 2.
          */
      
    binarynibbles : function(n)
    {
        var flag=0,s1,s2;
        s1=n & 0x0F;//0x0F means it takes last 4 bits one
        s2=n & 0xF0;// 0xF0 means it takes last butone 4 bits one
        s1=s1<<4;// shifting 4 bits leftside
        s2=s2>>4;// shifting 4 bits rightside
        var res=s1 | s2;
        console.log(res);
        for(var i=res;i>0;i--)
        {
            if(res==Math.pow(2,i))
            {
                flag=1;
                break;
            }
        }
            if(flag==1)
            {
                console.log("number is power of: "+i);
            }
            else
            {
                console.log("not a power of 2");
            }

    },
        /** Guessing number
          * @param - number taking from the user
          * @description - ­> takes a command­line argument N, asks you to think of a number
               between 0 and N­1, where N = 2^n, and always guesses the answer with n questions
          */
      
    questionNumber : function(number)
    {
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)
        console.log('Think of a number between 0 and ' + n )
        var low = 0;
        var high = n;
        var secret = this.question(low,high)
        console.log('Your number is '+secret)
    },
        
    question : function(low ,high)
    {
        var prompt =require('prompt-sync')()
            if ((high - low) == 1) 
            return low;
            else        
            var mid =low + (high-low) / 2;
                console.log("Is it less than  " , +mid)
                var choice = prompt('Enter the choice in true or false : ')
                if(choice ==='true')
                 {
                    return this.question(low,mid)
                 }
                else if(choice === 'false')
                {
                    return this.question(mid,high)
                }
                else
                {
                    console.log('Not valid')
                }
    },
}