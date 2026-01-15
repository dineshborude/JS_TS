sum = 0;
for(let i = 1; i <=5; i++) {
    sum = sum + i;
}

// console.log("Total Sum : ", sum);

// while loop

let i = 1;
while (i <= 5) {
    // console.log(i,' Danny');
    i++;
}


// do while loop

i = 10;
do {
    // console.log("i :", i);
    i--;
}while (i >= 5);


// Print Even Numbers from 0 to 100

for(let i = 0; i <= 2; i++) {
    if(i%2 === 0 ) {
        // console.log("Even Numbers : ", i);
    }else {
        // console.log('Odd Number : ', i);
    }
}

let str = 'danny';
console.log(`length of this string is ${str.length}`)


// Reverse the String

let reverseString = '';

for(let i = str.length-1; i >= 0; i--) {

 reverseString += str[i];
    
}
console.log(`Reversed String IS : ${reverseString}`);
// console.log(str.toUpperCase());
// console.log(str.replace('d','p'));
// console.log(str.toLowerCase());

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question('Enter your fullname ', name => {
//   console.log(`Name :  ${name} !`);

//   for(let i = 2; i >= 1; i--) {
//     console.log(`Generating your username in ${i}s`);
//   }

//   console.log(`Your Username is ${"@"+name.trim()+name.length}`);




//   readline.close();

// });

console.log("################## STRING INTERPOLATION ###################");
let variable = "calling an variable or expression in template literals"
let stringInterpolation = `${variable} is called STRING INTERPOLATION`;
console.log(stringInterpolation);
console.log(`Value of a + b is : ${1 + 2}`);
