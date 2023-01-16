const crypto=require('crypto')
const fs=require('fs')
let arrayOfHashes=[]
let stringOfHashes=''

function convertDecToHex(number) {
        number = number.toString(16);
        return '0'.repeat(Math.max(2 - number.length, 0)) + number;
    };

for (let i=0;i<256;i++){
    const fileBuffer=fs.readFileSync("./task2/file_"+convertDecToHex(i)+".data")
    const hash=crypto.createHash('sha3-256')
    const finalHex=hash.update(fileBuffer).digest('hex')
    arrayOfHashes.push(finalHex)
    }

arrayOfHashes.sort()
stringOfHashes=arrayOfHashes.join('')
stringOfHashes+='d1vergence@yandex.ru'
console.log(stringOfHashes)
console.log(stringOfHashes.length)

const resultHash=crypto.createHash('sha3-256')
const resultFinalHex=resultHash.update(stringOfHashes).digest('hex')
console.log(resultFinalHex)

