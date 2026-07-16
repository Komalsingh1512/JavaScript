//inbuilt modules are already there with Node.js sp if you.ve node.js installed then you don't need to require or install those.

const os = require('os')
console.log(os)
// console.log(os.arc)
// console.log(os.freemem())
// console.log(os.cpus())
// const fs= require('fs')
// console.log(fs)// filesystem
//to run above all these just go to the recomaended folder then run->node Filename

let data= fs.readFileSync('./file.txt', utf-8)
console.log(data)