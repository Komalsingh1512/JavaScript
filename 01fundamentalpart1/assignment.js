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
