// const buffer=new Buffer.from('salih')
// console.log(buffer)
// console.log(buffer.toJSON()) 


const fs=require('fs')
const readableStream=fs.createReadStream('./file1.txt',{encoding:'utf-8',highWaterMark:2})
const writableStream=fs.createWriteStream('./file2.txt')
readableStream.on("data",(chunk)=>{
    console.log(chunk)
    writableStream.write(chunk)
})
writableStream.write('\n hello')
writableStream.on('finish', () => {
    console.log('Finished writing to the file');
  });
  writableStream.emit('finish')