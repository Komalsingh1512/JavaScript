//var/let/const
//var is functional and global scoped, let and const are block scoped when they are declared inside a block of code else they are global scoped
//scope: means visibility and accessibility of variables in certain part of code

//hosting and closure example
//hosting: means the variable and function declarations are moved to the top of their scope before code execution
//Note: when we run our js code then one global execution context is created and the code is executed in two phases: creation phase and execution phase. In creation phase, the variable and function declarations are moved to the top of their scope before code execution. In execution phase, the code is executed line by line.

//how to create object in js
//1. object literal
//2. constructor function
//3. class
//4. Object.create() method 

let students = {}//object literal
if(students){
    console.log(students)//this will print {}
}else{
    console.log("students object is not created")
}
//
let student = null
if(student){
    console.log(student)//this will print null
}else{
    console.log("student object is not created")
}
//
let studentss = null
if(studentss){
    console.log(studentss)//this will print null
}else{
    studentss={}
    studentss.name="John"
    studentss.age=20
    console.log(studentss)//this will print { name: 'John', age: 20 }
}

//creating constructor function
