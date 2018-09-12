// Queue class
class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

    // enqueue function
    enqueue(element) {
        // adding element to the queue
        this.items.push(element);
    }
    // dequeue function
    dequeue() {
        // removing element from the queue
        // returns underflow when called 
        // on empty queue
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // front function
    front() {
        // returns the Front element of 
        // the queue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    len() {
       
        return this.items.length;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }


}
module.exports={
    banking: function(read,number)
    {
        var q=new Queue();
        var bal=1000;

        for(var i=0; i<number; i++)
        {
            q.enqueue(i);
        }
        
        while(q.len())
        {
            var option= read.question("Enter 1 to withdraw and 2 to deposit amount: ");
            if(option==1) 
            {
                var withdraw_amt=read.question("Enter the amount to be withdrawn: ");
                if(bal>=withdraw_amt)
                {
                    bal=bal-withdraw_amt;
                    console.log("Total available balanace= "+bal+" INR");
                }else{
                    console.log("Sorry!!! Running out of balance");
                    process.exit();
                }
            }
            else if(option==2)
            {
                var dep_amt=read.question("Enter the amount to be deposited: ");
                bal=(parseInt(bal)+parseInt(dep_amt));
                console.log("Total available balanace= "+bal+" INR");
            }
            else{
                console.log("Sorry you can't perform any operation! Contact the branch manager");
                break;
            }
            q.dequeue();
        }
        
    }
}