let isThisPrime = Number(prompt("Enter Number To Check If This Is Prime : "));
console.log(isThisPrime);
let count = 0;
for(let i = 1; i <= isThisPrime; i++) {

    if(isThisPrime%i === 0) {
        count++;
    }

}
if(count > 2) {
   console.log("Not Prime");
}else {
  console.log("Prime");
  
}