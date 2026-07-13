//students task: You've given following object:
// let employee= {
//     name : "Komal",
//     age: 23,
//     isMarried: true,
//     skills:{
//         frontendSkills: ["HTML", "CSS", "JS"],
//         backendSkills: ["JAVA", "SPRINTBOOT", "NODEJS", "EXPRESS"]
//     }
// }

// let { name, skills:{frontendSkills}}
// console.log(name, skills);


//read about deep and shallow copy 


// // spread operator: It expemds the data or elements of arrays and objects 
// let nums = [1,2,3,4,5]
// // let newarr=[...nums]
// // console.log(newarr)
// let newarr= [0, ...nums, 6]
// console.log(newarr)

//for merging ... let new arr= [..arr1, ...arr2]

// let student={
//     name: "komal",
//     age: 23,

// }
// let newObj= {...student, name: "Rounak"}
// console.log(newObj)


//wonderfull examples

// let students= [
//     {id:1, name :"komal", age:23},
//     {id:1, name :"Rounak", age:24},
//     {id:1, name :"Dhiraj", age:22},
// ]
// let newStudent= { id:4, name: "Riya", age: 22}
//  students = [...students, newStudent]
// conslode.log(updatedStudents)



//rest operators(... variable name ): it calculates values or data and convert into array and objects
// let nums = [1,2,3,4,5]
// let [a, b, ...newarr]= nums;
// console.log(a, b, newarr)


//4. default value
function welcome(name){
    console.log(name, "WELCOME")
}
welcome("komal")

//5. skipping value 

let nums = [1,2,3,4,5]
let [a,,, b]= nums
console.log(a, b)

//6. templet literals: another way of creating string s'
let name = " komal singh ", university="LPU"
let welcommesgg= name + "welcome to" + university
console.log(welcommesgg)

//or
let names = " komal Baby ", universitys="LPU"
let welcomemess=`${names} welcome to ${universitys}`
console.log(welcomemess)

//arrow functio 
let welcome = ()=>{
    return "welcome all"
}
console.log(welcome)


//Student Task: create a arrow function to print student details 
let welcome = ({name, city, age})=>{
    console.log(name)
    console.log(city)
    console.log(age)

}
printStudentsDetail()

//arrow function doesnot have support this keyword it directly represent 

//learn about framework and libraray