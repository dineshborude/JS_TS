let heroes = ["antman","junior G","ironman","XMens"];

// console.log(arr);

for(let hero of heroes) {
    // console.log(hero);
}

// Find out the average mark of class : 

let marks = [85,90,46,96,20,98,45,35,10];
marks.push(55);
let students = marks.length;

let sum = 0;

for(let i = 0; i <= marks.length-1; i++) {
    sum = sum + marks[i]; 
}


// console.log(sum/students)

marks.pop();
marks.push(45,86,69);

// console.log(marks)

marks2 = [1,2,3];

let allMarks =  marks.concat(marks2);

console.log(allMarks);