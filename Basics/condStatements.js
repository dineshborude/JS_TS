const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number ', num => {
  console.log(`Number :  ${num}!`);

    if (num % 5 === 0) {
    console.log("Multiple Of 5");
}else {
    console.log("Not a multiple of 5");
}

  readline.close();
});



