var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function InsertionSort() {
    var size=prompt('enter no of size: ');
    utility.InsertionSort(size);
    }
    InsertionSort();