
function checkPallindrome(str) {

    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(str);
    let reverse = "";
    for(let i = str.length-1; i >=0; i--) {
        reverse = reverse + str[i];
    }
    console.log(reverse);
    if(reverse == str) {
        console.log('Pallindrome');
    }
    else {
        console.log('Not Pallindrome');
    }
}
checkPallindrome('Evil is a name of a foeman, as I live'):