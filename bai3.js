function reverse(s){
    let s2 = '';
    for (let i = s.length - 1; i >= 0; i--){
        s2 += s[i];
    }
    console.log("string reverse: ",s2)
}

reverse("Hello My Name Is")