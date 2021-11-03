function solve(arr) {
    let number = +arr.shift();

    let operations = {
        chop: function (number) {
            return number / 2;
        },
        dice: function (number) {
            return Math.sqrt(number);
        },
        spice: function (number) {
            return 1 + number;
        },
        bake: function (number) {
            return number * 3;
        },
        fillet: function (number) {
            return number * 0.80;
        }
    }




    for (let i = 0; i < arr.length; i++) {
      let operation = arr[i];
      if(operations.hasOwnProperty(operation)){
          number = operations[operation](number);
          console.log(number);
      }  

    }

}

solve(['32', 'chop', 'chop', 'chop', 'chop','chop']);