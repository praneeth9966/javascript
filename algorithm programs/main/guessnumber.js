var prompt = require('prompt-sync')()
var utility=require('../utility/utility.js');
 function questionNumber()
 {     var number = prompt('Enter the number : ')
     utility.questionNumber(number)
 }
 questionNumber()
