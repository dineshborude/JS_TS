/*
let billAmount = Number(prompt("Enter Bill Amount"));

if (billAmount > 0 && billAmount <= 5000) {
    console.log(billAmount);
}else if (billAmount > 5000 && billAmount <= 7000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((5*billAmount)/100)));
}else if (billAmount > 7000 && billAmount <= 10000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((10*billAmount)/100)));
}else if (billAmount > 10000 && billAmount <= 20000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((20*billAmount)/100)));
}else if(billAmount > 20000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((25*billAmount)/100)));
}

else {
    console.log("Please enter valid input");
}
*/

//minimal version : 

let billAmount2 = Number(prompt("Enter Bill Amount"));
let off = 0;

if(billAmount2 > 0 && billAmount2 <= 5000) {
    console.log("No Discount, Your Bill Is : " + billAmount2);
}else if(billAmount2 > 5000 && billAmount2 <= 7000){
    off = 5;
}else if (billAmount2 > 7000 && billAmount2 <= 10000) {
    off = 10;
}else if (billAmount2 > 10000 && billAmount2 <= 20000) {
    off = 20;
}else if (billAmount2 > 20000) {
    off = 25;
}

let discountedPrice = (billAmount2 - Math.floor((off*billAmount2)/100));

console.log("Your Bill With Discount Is : " +discountedPrice);
