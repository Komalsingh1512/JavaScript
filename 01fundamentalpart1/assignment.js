//value and variables
let county= 'INDIA';
console.log(country);
let continent= 'ASIA';
console.log(continent);
let population= 123456789;
console.log(population);
//data types
let isIland = true;
console.log(isIland);
let language;
console.log(language);
console.log(typeof isIland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//let const and var
let language1 = 'hindi';
language1 = 'english';
console.log(language1);
const PI= 3.14;
console.log(PI);

const combined= country +" "+ 'is my country and it is in ' + continent  +" " + 'and it has population of ' + population + " " + 'people and the language spoken there is ' + language1;
console.log(combined);

//1Task Mark and John are trying to compare their BMI (Body Mass Index)
let massMark= 78;
let heightMark= 1.69;
let massJohn = 95;
let heightJohn= 1.95
let BMIMark= massMark/(heightMark *heightMark);
let BMIJohn= massJohn/(heightJohn *heightJohn);
const markHigherBMI= BMIMark > BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

if(BMIMark> BMIJohn){
   console.log(`Marks's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`); 
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
//3task
const scoreD1= 96;
const scoreD2= 108;
const scoreD3= 89;
const scoreK1= 88;
const scoreK2= 91;
const scoreK3= 110;
const scoreDolphins= (scoreD1+scoreD2+scoreD3)/3;
console.log(scoreDolphins);
const scoreKoalas= (scoreK1+scoreK2+scoreK3)/3;
console.log(scoreKoalas);
if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
}else{
    console.log("Both win the trophy");
}
//4thtask
const bill = 275;
const tip = bill <=300 && bill >=50? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);