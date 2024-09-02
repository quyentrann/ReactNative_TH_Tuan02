var bills = [125, 555, 44]
var calcTip = (arr)=>{
    return arr.map((item)=>{
        return (item>=50 && item<=300) ? item * 0.15 : item * 0.2;
    })
}
 var tips = calcTip(bills);
 console.log(tips);
 var total = tips.map((item, index)=>{
    return item + bills[index];
 })
 console.log(total);
