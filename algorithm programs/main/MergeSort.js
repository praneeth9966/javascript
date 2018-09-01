var prompt=require('prompt-sync')();
    var utility=require('/home/admininistrator/workspace/algorithm programs/utility/utility.js');
    function mergeSort() {
    var row=prompt('enter no of size: ');
    utility.mergeSort(row);
    }
    mergeSort();