function checkPalindrome(n){
    const str = n.toString();
    let str2 = '';
    for(let i = str.length - 1; i >= 0; i-- ){
        str2 = str2 + str[i];
    }
    if(str2 === str){
        return console.log('isPalindrome')
    }
    else{
        return console.log('notIsPalindrome')
    }
}


