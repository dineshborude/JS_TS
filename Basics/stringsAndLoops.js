sum = 0;
for(let i = 1; i <=5; i++) {
    sum = sum + i;
}

console.log("Total Sum : ", sum);

// while loop

let i = 1;
while (i <= 5) {
    console.log(i,' Danny');
    i++;
}


// do while loop

i = 10;
do {
    console.log("i :", i);
    i--;
}while (i >= 5);


// Print Even Numbers from 0 to 100

for(let i = 0; i <= 100; i++) {
    if(i%2 === 0 ) {
        console.log("Even Numbers : ", i);
    }else {
        console.log('Odd Number : ', i);
    }
}