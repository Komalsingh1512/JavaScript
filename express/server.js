const express = require('express')
const server = express()
server.get('/', (req, res)=>{
    res.send("welcome")
})
server.listen(800, ()=>{
    console.log(`server has started on http://localhost:8000`)
})