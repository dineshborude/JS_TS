
function greetings() {

    // console.log("Hello");

}

greetings();

//Parameter Function

function parameterFunction(param) {

    // console.log(param);

}

parameterFunction("I Love JS"); //Argument 

function sum(a,b) {
    // console.log(a+b);
}

// sum(9,9);

function multiplication(x,y,z) {
    return ans = x*y*z;
}

// console.log(multiplication(2,3,4));

// Arrow Functions

const arrowfunction = (a,b) => {
    console.log(a*b);
}

// arrowfunction(4,6);

function returnVowels(str) {

    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i <= str.length-1; i++) {
        for(let j = 0; j <= vowels.length-1; j++) {

            if(str[i] === vowels[j]) {
                count++;
            }

        }
    }
    return count;
}

// console.log(returnVowels("ytrt"));

function countVowels(str) {

    let count = 0;


    for (let i of str) {
        if (
            i === 'a'|| 
            i === 'e'|| 
            i === 'i'|| 
            i === 'o'|| 
            i === 'u'
        ) {
            count++;
        }
    }
    return count;

}

console.log(countVowels("aieou"));

const countVowels2 = (str) => {
     let count = 0;


    for (let i of str) {
        if (
            i === 'a'|| 
            i === 'e'|| 
            i === 'i'|| 
            i === 'o'|| 
            i === 'u'
        ) {
            count++;
        }
    }
    return count;
}

console.log(countVowels2("oweles"))