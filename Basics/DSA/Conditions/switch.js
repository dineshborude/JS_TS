/*
let day = 2;

switch(day) {
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday");
    break;

    default: console.log("Invalid");
}

let number = "Two";

switch(number) {
    case "One" : console.log("1");
    break;
    case "Two" : console.log("2");
    break;
}
*/
// Precision Handling

let sum = 0.1 + 0.2;

console.log(sum);


switch(Number(sum.toPrecision(1))) {
    case 0.3: console.log("Its your boy Paadshaah");
    break;
    case 0.4: console.log("Yo Yo");
    break;

    default : console.log("Raaaaaaftaaaaaaar");
}