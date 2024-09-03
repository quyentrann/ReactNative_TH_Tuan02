const arr = [3,4,5,6];

console.log(arr.at(1)); //chỉ số
arr.pop(); // loại bỏ phần tử cuối
console.log(arr);

const arr1 = [3,4,5,6]
arr1.push(7) // thêm phần tử vào cuối mảng
console.log(arr1);

// arr.fill(value, start, end)
arr1.fill(1)
console.log(arr1);

const result=arr1.join(' | ')
console.log(result);

const result1 = arr1.shift();
console.log(arr1);

const arr2 = [3,4,5,6]
// map
const kq1 = arr2.map((num)=> num + 6)
console.log(kq1);

// find tìm kiếm phần tử đầu tiên thỏa điểu kiện
const kq2 = arr2.find((num) => num>4)
console.log(kq2);

// filter tìm kiếm phần tử thỏa đk
const kq3 = arr2.filter((num)=> num >4)
console.log(kq3);

// every trả về true nếu tất cả đều thỏa điều kiện, false nếu có 1 phần tử k thỏa
const kq4 = arr2.every((num)=> num > 5)
console.log(kq4);

// findIndex trả về chỉ số phần tử đầu tiên thỏa điểu kiện
const kq5 = arr2.findIndex((num)=> num > 4)
console.log(kq5);

//reduce
const kq6 = arr2.reduce((acc, num) => acc + num , 0);
console.log(kq6);







