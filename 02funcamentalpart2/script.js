'use strict';
// Function declaration
function logger(){
     console.log("My name is Komal Kumari Singh")
}
logger();
// Function expression
const fruitProcessor2 = function(apples, oranges){
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
     return juice;
}
const appleJuice2 = fruitProcessor2(5, 0);
console.log(appleJuice2);
// Arrow function
const add= (a,b) =>a+b;
console.log(add(2,3));


//example of function calling another function
function cutFruitPieces(fruit){
     return fruit*4;
}
function fruitProcessor(apples, oranges){
     const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
        const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
        return juice;
}
const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);
//array
const friends= ["komal", "riya", "Urja", "Fruti", "Jagriti"]
console.log(friends);
const fruits= new Array("apple", "banana", "orange");
console.log(fruits);
console.log(friends[0]);
console.log(friends.length);
const firstName= "Komal";
const komal= [firstName, "Singh", 2024-1998, "student", friends];
console.log(komal);

//array operations 
const birds= ["sparrow", "crow", "pigeon", "peacock"];
birds.push("parrot");//add element at the end of the array
console.log(birds);
birds.unshift("dove");//add element at the beginning of the array
console.log(birds);
birds.pop();//remove last element of the array
console.log(birds);
birds.shift();//remove first element of the array
console.log(birds);
console.log(birds.indexOf("pigeon"));//return the index of the element
console.log(birds.includes("crow"));//return true if the element is present in the array
//dot vs bracket notation
const komalObject={
     firstName: "Komal",
     lastName: "Singh",
     age: 26,
     job: "student"
};
console.log(komalObject.firstName);//it is used when we know the name of the property
console.log(komalObject["lastName"]);

