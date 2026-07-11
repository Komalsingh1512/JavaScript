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

//creating constructor function : it is  a blue print for creating objects. It is a function that is used to create multiple objects with the same properties and methods. The constructor function is called with the 'new' keyword and it creates a new object and assigns it to the 'this' keyword.
function Student(name, age){
    this.name = name
    this.age = age
    // this.greet = function(){
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    // }
}
let student1 = new Student("komal", 20)
console.log(student1)//Student { name: 'komal', age: 20 }
// student1.greet()


//asyncronous programming: it is a programming synchronous paradigm that allows the program to continue executing other code while waiting for an operation to complete. It is used to handle operations that take time to complete, such as network requests, file I/O, and timers. In asynchronous programming, the program does not wait for the operation to complete before moving on to the next line of code. Instead, it uses callbacks, promises, or async/await to handle the result of the operation when it is complete.
//callback: it is a function that is passed as an argument to another function and is executed after the completion of that function. It is used to handle the result of an asynchronous operation. The callback function is called with the result of the operation as its argument.

console.log("first task")
console.log("second task")
for(let i=0; i<10000; i++){
    //this is a long running task
}
console.log("third task")


//how to achieve asynchronous programming in js
//through web apis: to make asynchronous programming in js, we can use web apis provided by the browser. These web apis are built-in functions that allow us to perform asynchronous operations such as making network requests, reading files, and setting timers. The web apis are executed in a separate thread and do not block the main thread of execution. When the operation is complete, the web api calls the callback function with the result of the operation.

//1. setTimeout(): it is a web api that allows us to execute a function after a specified amount of time. It takes two arguments: the function to be executed and the time in milliseconds to wait before executing the function.
//2. setInterval(): it is a web api that allows us to execute a function repeatedly at a specified interval of time. It takes two arguments: the function to be executed and the time in milliseconds to wait before executing the function again.
//3. fetch(): it is a web api that allows us to make network requests and retrieve data from a server. It returns a promise that resolves with the response of the request. We can use the .then() method to handle the result of the request when it is complete.
//4. local storage: it is a web api that allows us to store data in the browser's local storage. It provides methods to set, get, and remove data from the local storage. The data stored in the local storage is persistent and can be accessed even after the browser is closed and reopened.

//setTimeout example 
setTimeout(function(){
    console.log("this is a setTimeout example")
}, 1000)//this will print "this is a setTimeout example" after 2 seconds


//setInterval example
// let count = 0
// const intervalId = setInterval(function(){
//     count++
//     console.log("this is a setInterval example", count)
//     if(count === 5){
//         clearInterval(intervalId)
//         console.log("setInterval cleared after 5 times")
//     }
// }, 1000)//this will print "this is a setInterval example" every 1 second for 5 times



//how to handle asynchronous programming in js
//1. callback
//2. promises
//3. async/await


//explore about web apis in js

//promises: it is a built-in object in js that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more elegant way than callbacks. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the operation was successful and the promise has a resulting value. When a promise is rejected, it means that the operation failed and the promise has a reason for the failure. We can use the .then() method to handle the result of a fulfilled promise and the .catch() method to handle the reason for a rejected promise.
//promise example
let promise = new Promise(function(resolve, reject){
    let success = true
    if(success){
        resolve("promise is fulfilled")
    }else{
        reject("promise is rejected")
    }
})
promise.then(function(result){
    console.log(result)//this will print "promise is fulfilled"
}).catch(function(error){
    console.log(error)//this will print "promise is rejected"
})


//✅ What is Callback Hell? 
// //Callback Hell occurs when multiple asynchronous operations are nested inside one another, making the code difficult to read, understand, and maintain. It is also called the Pyramid of Doom because the code keeps moving to the right.

//code
function getData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000);
}

function saveData(callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback();
    }, 1000);
}

getData(function () {
    processData(function () {
        saveData(function () {
            console.log("All tasks completed");
        });
    });
});

//promise: A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to write more readable and maintainable code for handling asynchronous operations compared to traditional callbacks.



