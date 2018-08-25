module.exports={
    hello : function(userinput)
    {
        if(userinput.length>2)
        {
        console.log("hey "+ userinput +"! how are you");
        }
        else
        {
            console.log("please enter userinput greater than 2 characters");
        }
    },
    leap : function(userinput)
    {
        if(userinput.length==4)
        {
        if(userinput%4==0)
        {
            console.log("it is a leap year");
            
        }
        else if(userinput%400==0&&userinput%100!=0)
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
flip : function(userinput)
{
    let n=0,x=0,y=0,a,b;
    for(let i=1;i<=userinput;i++)
    {
        n=Math.random();
        console.log("the random outputs are:"+n);
        if(n>=0.5)
        {
            x++;
        }
        else
        {
            y++;
        }
    }
    let hp=(x/userinput)*100;
    console.log("the head% is :"+hp+"%");
    var tp=(y/userinput)*100;
    console.log("the tail% is :"+tp+"%");
},
power : function(userinput)
{
    if(userinput<=30)
    {
    for(let i=0;i<=userinput;i++)
    {
        let x=Math.pow(2,i);
      /*  if(x%4==0)
        {
            console.log(x+":"+"it is a leap year");
            
        }
        else if(x%400==0&&x%100!=0)
        {
            console.log(x+":"+"it is a leap year");
        }
        else
        {
            console.log(x+":"+"not a leap year");
        }*/

        console.log("2^"+i+"="+x)
    }
 }
 else
 {
     console.log("stack overflow");
 }
},
harmonicno : function(userinput)
{
    let res=1;
    for(let i=1;i<=userinput;i++)
    {
        res=res*i;
    }
    let sum=0;
    for(let j=1;j<=userinput;j++)
    {
        sum=sum+res/j;
    }
    console.log(sum+"/"+res);
},
primefactor : function(userinput)
{
    
    
        for(let i=2;i<=userinput/2;i++)
    {
        let a=1;
        if(userinput%i==0)
        {
            for(let j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    a=0;
                    break;
                }
            }
            if(a==1)
            {
                console.log(i);
            }
        }
    }
},
gamblerp : function(userinput,stake,goal)
{
    let win=0,loss=0;
    if(stake<goal && stake>0)
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
    let wp=(win/userinput)*100;
    console.log("the win% is :"+wp+"%");
    var lp=(loss/userinput)*100;
    console.log("the loss% is :"+lp+"%");
    }
    else
    {
        console.log("cant play more");
    }
},

couponno : function(userinput)
{
    var random=[1,2,3];
    for(var i=0;i<=random.length;i++)
    {
        if(random[i]!=random[i+1])
        console.log(random[i]);
    }
},
quadraticf : function(a,b,c)
{
    let delta=Math.pow(b,2)-4*a*c;
    console.log("value of delta is:"+delta);
    if(delta>0)
    {
    let res1=(((-1*b) + Math.sqrt(delta))/(2*a));
    let res2=(((-1*b) - Math.sqrt(delta))/(2*a));
    console.log(res1);
    console.log(res2);
    }
    else
    {
        console.log("imaginary roots");
    }   
},
distancep : function(x,y)
{
    let d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    console.log("distance between x and y:"+d);
}

}