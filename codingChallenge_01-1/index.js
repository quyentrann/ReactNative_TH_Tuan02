var arr = [17, 21, 23]
var arr1 = [12, 5, -5, 0, 4]
var printForecast = (arr)=>{
    arr.map((item, index)=>{
        console.log(`${item}oC trong ngay thu ${index+1}`);
    })
}

console.log(`Du lieu 1`);
printForecast(arr);
console.log(`Du lieu 2`);
printForecast(arr1)

