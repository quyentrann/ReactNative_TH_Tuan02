var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips=[];
var totals = [];
var calcTip = (arr)=>{
  return arr.map((item)=>{
    return item >=50 && item<=300 ? item*0.15 : item*0.2;
  });
};
tips = calcTip(bills);
console.log(tips);

totals= tips.map((item, index)=>{
  return item + bills[index];
});
console.table(totals);

// var calcAverage = totals.reduce((acc, num)=> acc+num)/ totals.length
var calcAverage = (arr)=>{
  return arr.reduce((acc, num)=> acc+num)/ arr.length;
};
console.log(`Trung binh tong: `+calcAverage(totals));
