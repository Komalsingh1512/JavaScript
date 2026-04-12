const calcAverage= (a,b,c) =>(a+b+c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins= calcAverage(44,23,72);
const scoreKoalas= calcAverage(44,23,72);
console.log(scoreDolphins,scoreDolphins);
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins>= 2* avgKoalas){
        console.log(`Dolphims win (${avgDolphins} vs. ${avgKoalas})`) ;
    }else if(avgKoalas>= 2*avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`) ;
    }else{
        console.log("No team wins");
    }
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(573,111);

//task
const calcTip= function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
}
const bills= [125,555,44];
const tips= [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,total);