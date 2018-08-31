var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function bubbleSort() {
    var row=prompt('enter no of rows: ');
    utility.bubbleSort(row);
    }
    bubbleSort();