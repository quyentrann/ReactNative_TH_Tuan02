var Dolphins  = [85, 54, 41]
var Koalas = [23, 34, 27]

// var avgDolphins = Dolphins.reduce((acc, num) => acc + num)/ Dolphins.length
// var avgKoalas = Koalas.reduce((acc, num)=> acc + num)/ Koalas.length
var calcAverage = (arr)=>{
    return arr.reduce((acc, num)=> acc + num)/arr.length;
}

var avgDolphins = calcAverage(Dolphins)
var avgKoalas = calcAverage(Koalas)
// console.log(avgKoalas);
var checkWinner = (avgDolphins, avgKoalas)=>{
    // avgDolphins>avgKoalas ? console.log(`Dolphins thắng (${avgDolphins} so với ${avgKoalas})`):console.log(`Koalas thắng (${avgKoalas} so với ${avgDolphins})`);
    if(avgDolphins>avgKoalas){
        avgDolphins >=2*avgKoalas ? console.log(`Dolphins thắng (${avgDolphins} so với ${avgKoalas})`):console.log(`Không có đội nào thắng`);
    }else{
        avgKoalas >=2*avgDolphins ? console.log(`Koalas thắng (${avgDolphins} so với ${avgKoalas})`):console.log(`Không có đội nào thắng`);
        
    }
}

checkWinner(avgDolphins, avgKoalas)
