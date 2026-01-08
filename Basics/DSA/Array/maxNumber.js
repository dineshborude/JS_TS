
let arr = [9990,30,40,5,1000];
let max = arr[0];

for(let i = 0; i < arr.length; i++) {

    if(arr[i] >= max) {
        max = arr[i];
    }

}


console.log(max);
