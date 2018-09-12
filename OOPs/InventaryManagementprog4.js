var fs = require('fs')
var prompt = require('prompt-sync')();
fs.readFile('/home/admininistrator/workspace/OOPs/prog4.json', function (err, data) {
    if (err) throw err
    var sum = 0;
    var arrayOfObjects = JSON.parse(data)
    console.log("enter 1 to insert");
    console.log("enter 2 to delete");
    var option = prompt('enter the option: ');
    switch (parseInt(option)) {

        case 1: var stock = prompt('enter number of stocks: ');
            for (var i = 1; i <= stock; i++) {
                var name = prompt('enter the name: ');
                var number = prompt('enter the number of share: ');
                var price = prompt('enter the price: ');
                arrayOfObjects.users.push({
                    "name": name,
                    "number_of_share": number,
                    "price": price

                })

                console.log(arrayOfObjects);
                var num = parseInt(number * price);
                console.log("the total price of each stock is: " + num);
                sum = parseInt(sum + num);
                fs.writeFile('/home/admininistrator/workspace/OOPs/prog4.json', JSON.stringify(arrayOfObjects), function (err) {
                    if (err) throw err


                })
            }
            console.log("the total price of stock is: " + sum);
            break;
        case 2:
            var i = prompt('which index u want to delete  ? : ')
            delete arrayOfObjects.users[i];
            console.log(arrayOfObjects.users);
            fs.writeFile('/home/admininistrator/workspace/OOPs/prog4.json', JSON.stringify(arrayOfObjects), function (err) {
                if (err) throw err

            })
            break;

    }
})

