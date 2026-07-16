const http= require('http')
const server = http.createServer((req, res)=>{
    if(req.url =="/" && req.method=="GET"){
        res.end("welcom to home page komal ")
    }else if(req.url =="/about" && req.method=="POST"){
        res.end("welcome to AboutPage ")
    }else if(req.url =="/contact"){
        res.end("welcome to ContactPage")
    }else{
        res.end("Page Not Found  ")
    }
    
})

server.listen(8000, ()=>{
    console.log(`server is running on http://localhost:8000`)
})