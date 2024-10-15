function mergeAndSortAndFind(arr1,arr2){
    const mergeArr = [...arr1,...arr2];
    mergeArr.sort((a,b) => a - b);
    let lengthArr = mergeArr.length;
    let trungbinh = (lengthArr - 1) / 2;
    console.log("trung binh: ",trungbinh)
    if (trungbinh % 1 !== 0.5) {
        return console.log(`trung vi la: ${mergeArr[trungbinh]}`)
    }
    else{
        const before = Math.floor(trungbinh);
        const after = before + 1;
        return console.log(`trung vi la: ${(mergeArr[before] + mergeArr[after])/2}`)
    }
}

mergeAndSortAndFind([1,3],[2])
mergeAndSortAndFind([1,3],[2,4])
mergeAndSortAndFind([1,3],[2,4,7])
mergeAndSortAndFind([1,3],[2,4,7,5])