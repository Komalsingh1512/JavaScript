//1. function can be passed as an argument to another function
function greeting(nameGiver){
    console.log("welcome "+ nameGiver())
}
function giveName(){
    return "Komal"
}
greeting(giveName)
//2. function can also return a function
function greeting(nameGiver){
    return function (){ //anonymous function
        return " Welcome "+ nameGiver()
    }
}
function giveName(){
    return "Rounak"
} 
var someFun= greeting(giveName)
someFun() // calling the returned function
console.log(someFun())

//3. higher order function : a function whihc can accept another function as an argumnt and return another function as well such functions are known as higher order function

/* there are various array's higher orfer functions

1. map: it is a HOF which is used to transform array elements from one state to another and always return a new array with the same length as the original array
2. filter: it is a HOF which is used to filter array elements based on a condition and return a new array with the filtered elements
3. reduce: it is a HOF which is used to reduce array elements to a single value based on a function
4. forEach: it is a HOF which is used to iterate over array elements and perform an action on each element
5. sort: it is a HOF which is used to sort array elements based on a function
6. find: it is a HOF which is used to find the first element in an array that satisfies a condition
*/


var nums = [1, 2, 3, 4, 5]
var squareElement= function(num){
    return num **2
}
var squaredArray= nums.map(squareElement)
console.log(squaredArray) // [1, 4, 9, 16, 25]

//squaring the even number 
var evennums= nums.map(function(num){
    if(num%2==0){
        return num**2
    }else{
        return num
    }
})
console.log(evennums) // [4, 16]

//filter 
var students = [ {name : "Komal", isPassed : true}, {name : "Rounak", isPassed : true}, {name : "Saurabh", isPassed : false}, {name : "Ankit", isPassed : false}]
var failedStudents = students.filter(function(student){
    if(!student.isPassed){
        return student
    }
})
console.log(failedStudents) // [{name : "Rounak", isPassed : false}, {name : "Ankit", isPassed : false}]

//foreach 
students.forEach(function(student){
    console.log(student.name.toUpperCase())
})

//reduce
var nums = [1, 2, 3, 4, 5]
 // reduce take two arguments, first is a callback function and second is an initial value of accumulator
var sum = nums.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0) //0 will update to 1 then 3.. acc to sum it will update 
console.log(sum) // 15

//reduce can also be used to find the total salary of students who have passed
var students = [ {name : "Komal", isPassed : true}, {name : "Rounak", isPassed : true}, {name : "Saurabh", isPassed : false}, {name : "Ankit", isPassed : false}]
var totalPassed= students.filter(function(student){
    if(student.isPassed){
        return student
    }
}).map(function(student){
    return student.salary
}).reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0)
console.log(totalPassed) // 0 because we have not defined salary for students