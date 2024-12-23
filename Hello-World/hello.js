// console.log("yash panchal");
// // alert("fhv")


// const {add,sub} = require('./math')
// console.log(sub(9,4));

// const os = require('os')

console.log(os.arch());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.machine());
console.log(os.platform());
console.log(os.version());
console.log(os.totalmem());
console.log(os.type());
console.log(os.userInfo());                                                                                                                                                                                 

const fs = require('fs')
// console.log(fs.writeFileSync('file.html', '<h1>Yash</h1>'));
// console.log(fs.readFileSync('file.html'));
// console.log(fs.readFileSync('math.js', 'utf-8'));
console.log(fs.appendFileSync('file.html', '<h1>Yash</h1>'));
