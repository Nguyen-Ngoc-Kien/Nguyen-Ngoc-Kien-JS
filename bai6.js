let arr = [
    { brand: 'Huyndai', model: 'Santafe' },
    { brand: 'Huyndai', model: 'Sonata' },
    { brand: 'Vinfast', model: 'Lux SA' },
    { brand: 'Toyota', model: 'Camry' },
    { brand: 'Vinfast', model: 'Lux A' },
    { brand: 'Toyota', model: 'Vios' }
];

// Hàm nhóm các phần tử theo thuộc tính brand
function groupByBrand(arr) {
    let grouped;
    
    // Duyệt qua từng phần tử và nhóm theo brand
    arr.forEach(item => {
        if (!grouped[item.brand]) {
            grouped[item.brand] = [];
        }
        grouped[item.brand].push(item);
    });
    
    // Chuyển đối tượng grouped thành mảng của các mảng
    return Object.values(grouped);
}

let result = groupByBrand(arr);
console.log(result);