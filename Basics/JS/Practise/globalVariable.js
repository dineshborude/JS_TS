
var a = 10;
let c = 20;


function b() {

    var x = 100;
    console.log(`x :  ${x}`)
    return x;

}



console.log(a);
console.log(b());
console.log(globalThis.a)
console.log(global.c) //undefined