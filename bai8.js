let copy1 = {name : 'Kien', age :'15'};
function copy(copy1){
    let copy2 = {};
    for (let key in copy1){
        copy2[key] = copy1[key];
    }
    return console.log(copy2)
}

copy(copy1)