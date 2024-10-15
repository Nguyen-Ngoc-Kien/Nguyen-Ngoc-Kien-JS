function isEmail(s){
    let count1 = 0;
    let count2 = 0;
    for(let i = 0 ; i < s.length; i++){
        if(s[i] == '@'){
            count1++;
        }
        if(s[i] == '.'){
            count2++;
        }
    }
    if(count1 != 1 || count2 != 1){
        return console.log(`${s} Not Is Email!`)
    }
    let x = s.indexOf('@')
    let y = s.indexOf('.')
    if(x > 0 && y > x && y < s.length - 1){
        return console.log(`${s} isEmail!`);
    }
    else{
        return console.log(`${s} Not Is Email!`);
    }
}

isEmail("ngngockien2002@fpt.edu.vn")
isEmail("ngngockien2002@gmail.")
isEmail("@ngngockien2002gmail.")
isEmail("ngngockien2002gmail")