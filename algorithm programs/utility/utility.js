const la=require("lodash")
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
                * @param - n value taking from the user
                * @description - Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
                */     
    primeNumber : function(n)
    {
        var cn,count;
        for(let i=0;i<=n;i++)
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
                        console.log(""+cn);
                    }
        }
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
    primeanagram : function(n)
    {
        var arr=[];
        var cn,count;
        for(let i=0;i<=n;i++)
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
        console.log("Anagrams between 0 and "+n +"are");
        for(let i=0;i<arr.length;i++)
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

    binary :function(row)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(row);
        var a=0;
        for(var i=0;i<row;i++)
        {
            arr[i]=prompt("enter the numbers: ");
        }
        arr.sort();
        console.log(arr);
        var first=0,last=row-1;
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
            console.log("element found at index"+mid);
        }
        else
        {
            console.log("element not found");
        }
       
    },

    binarystring :function(row)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(row);
        var a=0;
        for(var i=0;i<row;i++)
        {
            arr[i]=prompt("enter the strings: ");
        }
        arr.sort();
        console.log(arr);
        var first=0,last=row-1;
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
            console.log("string found at index"+mid);
        }
        else
        {
            console.log("string not found");
        }
       
    },

    binarywordlist : function(data,number)
    {

    },

    binarysearchwordlist : function(arr,value)
    {
        /*var prompt=require('prompt-sync')();
        var arr=new Array(row);
        var a=0;
        for(var i=0;i<row;i++)
        {
            arr[i]=prompt("enter the numbers: ");
        }*/
        arr.sort();
        //console.log(arr);
        var first=0,last=row-1;
       // var value=prompt("enter the element to search: ");
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
            console.log("element found at index"+mid);
        }
        else
        {
            console.log("element not found");
        }
       
    },

    bubbleSort : function(row)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(row);
        for(let i=0;i<row;i++)
        {
            arr[i]=prompt("enter elements: ");
            
        }
        console.log(arr);
        this.bubble(arr);
        arr.forEach(element =>
            {
                console.log(parseInt(element));
            });  
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
    },

    InsertionSort : function(row)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(row);
            for(let i=0;i<row;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log(arr);
            this.insertion(arr);
            arr.forEach(element =>
                {
                    console.log(element);
                });
    },
    insertion : function(arr)
    {
        for(let i=1;i<arr.length;i++)``
        {
            var key=(arr[i]);
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=parseInt(arr[j]);
                j--;
            }
            arr[j+1]=key;
        }
    },

    mergeSort : function(row)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(row);
            for(let i=0;i<row;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
            console.log("before merge arr len "+arr.length);
            this.merge((arr));
            console.log("after merge arr len "+arr.length);
            arr.forEach(element =>
                {
                    if(element != undefined)
                    console.log(parseInt(element));
                });
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-1);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]);
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]);
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)
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
    }

}