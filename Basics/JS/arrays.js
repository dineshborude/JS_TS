
const myArray = ["Dinesh","Borude","Chasing Sunsets",true,12.5];

// console.log(myArray);

// console.log(`My name is ${myArray[0]} ${myArray[1]}`);  

const myHeroes = ["antman","junior G","ironman","XMens"];

// console.log(myHeroes);

// console.log(`My Favorite Hero Is ${myHeroes[3]}`);

function getGrades(marks) { 

    if(marks <= 32) return "F";
    else if(marks <= 52) return "E";
    else if(marks <= 72) return "D";
    else if(marks <= 92) return "C";
    else if(marks <= 112) return "B";
    else return "A";



}

// console.log(getGrades(0));

function returnTotal(...scores) {

    let total = 0;

    scores.forEach(function(score) {
        total = total + score;
    })

    return total;

}

console.log(returnTotal(1,2,3,4,5));