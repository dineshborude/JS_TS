const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question('Enter a number ', num => {
//   console.log(`Number :  ${num} !`);

//     if (num % 5 === 0) {
//     console.log("Multiple Of 5");
//     }else {
//         console.log("Not a multiple of 5");
//     }

//     let tensMultiple = (num % 10 === 0) ? 'Multiple of 10' : 'Not a multiple of 10';
//     console.log(tensMultiple);

//   readline.close();
// });

readline.question('Enter Marks : ', marks => {
    console.log(`Marks :  ${marks}`);
      readline.close(); 
    if(marks >= 90){
        console.log('A');
    }else if 
        (marks >= 80 && marks <= 89){
            console.log('B');
        }else if (marks >= 70 && marks <=79) {
            console.log('C');
        }else {
            console.log('Fail')
        }

    }


);

