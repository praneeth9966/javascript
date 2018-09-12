class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
        
    }
 
    push(element)
    {
        // push element into the items
        this.items.push(element);
    }

    pop()
    {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek()
    {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    isEmpty()
    {
        // return true if stack is empty
        return this.items.length == 0;
    }


    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    

}
module.exports={
    simple : function(exp)
    {
        var stack=new Stack();
        var count=0,counter=0;
        for(var i=0;i<exp.length;i++)
        {

            if(exp[i]=="(")
            {
                stack.push(exp[i]);
                count++;
                
            }
            else if(exp[i]==")")
            {
                
                stack.pop();
                counter++;
                
            }

            //console.log(stack.printStack());
            
        }
        //console.log(stack.printStack());
        //console.log(stack.isEmpty());
        if(count==counter)
        {
            console.log("true");
        }
        else
        console.log("false");
    }
}