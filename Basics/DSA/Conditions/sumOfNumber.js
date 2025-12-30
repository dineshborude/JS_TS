let number = 1234;
let sum = 0;

while(number > 0) {

    let reminder = number%10; // 4
    
    sum += reminder;

    number = Math.floor(number/10);
   

}

console.log(sum);