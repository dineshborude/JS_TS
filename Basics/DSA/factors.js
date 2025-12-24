let factors = Number(prompt("Enter A Number You Want Factorials Of : "));
console.log(factors);

for(i = 1; i <= Math.floor((factors/2)); i++) {

    if(factors%i === 0) {

        console.log(`Factor of ${factors} : ${i}`);

    }
        

}

console.log(`Factor of ${factors} : ${factors}`);