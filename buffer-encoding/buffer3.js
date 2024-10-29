const fs= require('fs');
const readableStream=fs.createReadStream('./file1.txt')
readableStream.on('data',(chunk)=>{
    console.log(chunk)
})
readableStream.emit('data')

