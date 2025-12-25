let number = 40585;
let copy = number;
let sum = 0;

while(number > 0) {

    let reminder = number % 10;
    let factorial = 1;

    for(let i = 1; i <= reminder; i++) {

        factorial = factorial * i; 

    }

    sum = sum + factorial;
    number = Math.floor(number/10);

}

console.log((sum === copy ? "Strong Number" : "Not Strong Number"));