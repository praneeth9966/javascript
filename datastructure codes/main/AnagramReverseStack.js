
var utility1 = require('/home/admininistrator/workspace/datastructure codes/utility/utility.js')
let prompt = require('prompt-sync')();

let utility = require('/home/admininistrator/workspace/datastructure codes/utility/array.js');

let utility3 = require('/home/admininistrator/workspace/datastructure codes/utility/stack.js');


let prime = [];

let anag = [];
/* Drier program to test above functions*/
function anagramReverse() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    prime = utility.prime(num1, num2);

    console.log('Prime are ');
    console.log(prime);

    let anagram = [];

    for (let i = 0; i < prime.length - 1; i++) {

        for (let j = i + 1; j < prime.length; j++) {

            index1 = prime[i].toString();

            index2 = prime[j].toString();

            let res1 = utility.anagrams(index1, index2);

            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);
            }

        }
    }

    anag = removeDuplicates(anagram);

    console.log('Anagrams in the range are :' + anag);


    function removeDuplicates(arr) {

        let unique_array = [];


        for (let i = 0; i < arr.length; i++) {

            if (unique_array.indexOf(arr[i]) == -1) {

                unique_array.push(arr[i])
            }
        }

        return unique_array;



    }

    let llist = new utility1();

    for (let i = 0; i < anag.length; i++) {

        llist.add(anag[i]);

    }

    let res = llist.printList();

    console.log(res);

    let stack = new utility3();

    for (let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);

        stack.push(temp);

    }

    let out = stack.printStack();
    console.log('elements in stack are :' + out);
    for (let i = anag.length; i > 0; i--) {
        console.log(stack.pop());
    }
}
anagramReverse();