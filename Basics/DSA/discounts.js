let billAmount = Number(prompt("Enter Bill Amount"));

if (billAmount > 0 && billAmount <= 5000) {
    console.log(billAmount);
}else if (billAmount > 5000 && billAmount <= 7000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((5*billAmount)/100)));
}else if (billAmount > 7000 && billAmount <= 10000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((10*billAmount)/100)));
}else if (billAmount > 10000 && billAmount <= 20000) {
    console.log("Discounted Bill Amount : " + (billAmount - Math.floor((20*billAmount)/100)));
}
else {
    console.log("Please enter valid input");
}