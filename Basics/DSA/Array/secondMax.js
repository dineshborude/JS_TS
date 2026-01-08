let arr = [877,33,90,50];

let max = Math.max(arr[0],arr[1]);
let secondMax = Math.min(arr[0],arr[1]);

for(let i = 2; i <arr.length; i++) {

    if(arr[i] > max) {
        secondMax = max;
        max = arr[i];

    } else if(arr[i] > secondMax) {
        secondMax = arr[i];
    }


}

console.log(secondMax);