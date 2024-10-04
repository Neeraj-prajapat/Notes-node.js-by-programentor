const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform())

const freeMemory = os.freemem();
// console.log(freeMemory)
console.log(`${freeMemory/1024/1024/1024}`)
console.log(os.type());