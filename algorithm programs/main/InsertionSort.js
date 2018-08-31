var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function InsertionSort() {
    var row=prompt('enter no of rows: ');
    utility.InsertionSort(row);
    }
    InsertionSort();