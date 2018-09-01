var prompt=require('prompt-sync')();
    var utility=require('../utility/utility.js');
    function bubbleSort() {
    var size=prompt('enter no of size: ');
    utility.bubbleSort(size);
    }
    bubbleSort();