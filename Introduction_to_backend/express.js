const http= require('http')
const fs=require('fs')
const server = http.createServer((req, res)=>{
    if(req.url =="/students" && req.method=="GET"){
        let students = JSON.parse(fs.readFileSync('student.json', utf-8))
        res.end(JSON.stringify({msg: "welcom to home page komal ", 'student.json':students}))
    
}
else if(req)
})

server.listen(8000, ()=>{
    console.log(`server is running on http://localhost:8000`)
})