class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element +" ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }

    GetNth(index) 
    {   
        
        var  current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.element; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0; 
    }

}
fs = require('fs');
module.exports = {
    unorderedList: function (arr, ele) {
        var l = new LinkedList();
        for (var i = 0; i < arr.length; i++) {
            l.add(arr[i]);
        }
        l.printList();
       
        if (l.indexOf(ele) == -1) {
            l.add(ele);

        }
        else {
            l.removeElement(ele);
        }
        var datawrite = l.printList();
        fs.writeFileSync("/home/admininistrator/workspace/datastructure codes/main/file.txt",datawrite);
    },

    orderedList: function (arr, ele) {
        console.log(arr);

        arr.sort(function (a, b) {
            return a - b;
        });
        console.log(arr);
        var l = new LinkedList();
        for (var i = 0; i < arr.length; i++) {
            l.add(arr[i]);
        }
        l.printList();
       // console.log("Index of ele " + l.indexOf(ele));
        if (l.indexOf(ele) == -1) {
            l.add(ele);
            
        }
        else {
            l.removeElement(ele);
        }
        l.printList();
        var datawrite = l.printList();
        fs.writeFileSync("/home/admininistrator/workspace/datastructure codes/main/file1.txt",datawrite);

    },
    hashing : function(arr,ele)
    {
        console.log(arr);
        var arr0=[],arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],newarr=[];
        var l=new LinkedList();
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]%11==0)
            {
                 arr0.push(arr[i]);
                 console.log(arr0);
            }
            

            else if(arr[i]%11==1)
            {
                arr1.push(arr[i]);
            }
            else if(arr[i]%11==2)
            {
                arr2.push(arr[i]);
            }
            else if(arr[i]%11==3)
            {
                arr3.push(arr[i]);
            }
            else if(arr[i]%11==4)
            {
                arr4.push(arr[i]);
                console.log(arr4);
            }
            else if(arr[i]%11==5)
            {
                arr5.push(arr[i]);
                console.log(arr5);
            }
            else if(arr[i]%11==6)
            {
                arr6.push(arr[i]);
                console.log(arr6);
            }
            else if(arr[i]%11==7)
            {
                arr7.push(arr[i]);
            }
            else if(arr[i]%11==8)
            {
                arr8.push(arr[i]);
            }
            newarr.push(arr0);
            newarr.push(arr4);
            newarr.push(arr5);
            newarr.push(arr6);

            console.log(newarr);
        }
    }
}
/*module.exports=LinkedList;*/
