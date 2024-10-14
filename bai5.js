function cleanString(str) {
    // Xóa các ký tự đặc biệt @, #, !, {, }, [,], (, )
    let cleanedStr = str.replace(/[ @ # ! { } [ \ ] ( ) ]/g, '');

    // Xử lý chuỗi để không xuất hiện nhiều hơn 1 dấu cách liên tiếp và xóa dấu cách ở đầu/cuối
    cleanedStr = cleanedStr.replace(/\s+/g, ' ').trim();

    return cleanedStr;
}

function reverseWords(str) {
    // Bước 1: Làm sạch chuỗi
    let cleanedStr = cleanString(str);

    if (cleanedStr === "") return [];

    // Bước 2: Tách chuỗi thành mảng từ
    let words = cleanedStr.split(' ');

    // Bước 3: Viết hoa chữ cái đầu, chữ cái còn lại viết thường
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    // Bước 4: Đảo ngược thứ tự các từ
    return words.reverse();
}

function averageNumbers(str) {
    // Bước 1: Làm sạch chuỗi
    let cleanedStr = cleanString(str);

    // Bước 2: Tách chuỗi thành các từ
    let words = cleanedStr.split(' ');

    // Bước 3: Lọc ra các từ chỉ chứa số
    let numbers = words.filter(word => /^\d+$/.test(word)).map(Number);

    if (numbers.length === 0) return 0;

    // Bước 4: Tính trung bình các số
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;

    // Chỉ lấy đến 1 chữ số sau dấu phẩy
    return parseFloat(avg.toFixed(1));
}

console.log(averageNumbers(""));  // 0
console.log(averageNumbers("Xin chào 123456 @Cy"));  // 123456
console.log(averageNumbers("Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100"));  // 52.5