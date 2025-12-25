let number = 146;
let copy = number;

while (number > 0) {

    let reminder = number % 10;
    let sum = 0;

    for(let i = 1; i <= reminder; i++) {

        sum += reminder*i;

    }

}