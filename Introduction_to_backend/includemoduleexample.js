const fs = require("fs");
// console.log(fs)

let student = {
  name: "Komal",
  age: 23,
  isMarried: true,
  city: "noida",
};

fs.readFile("student.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error while reading the file");
    return;
  }
  let students = JSON.parse(data);
  students.push(student);

  console.log(students)

  fs.writeFile("student.json", JSON.stringify(students, null, 2), (err) => {
    if (err) {
      console.log("Error while writing the file");
      return;
    }
    console.log("Student has added...");
  });
});



const http= require('http')
const server = http.createServer((req, res)=>{
    res.end("welcom komal ")
})

server.listen(8000, ()=>{
    console.log('server is running on http://localhost:8000')
})