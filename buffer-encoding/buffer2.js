const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('file3.txt', { encoding: 'utf8' });
const writablestream = fs.createWriteStream('file4.txt', { encoding: 'utf8' });


// Listen for the 'data' event to process data chunks
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
writablestream.write("working ")

writablestream.on('finish',()=>{
    console.log('worked')
})
// readableStream.emit('data')
// Listen for the 'end' event to know when reading is done
// readableStream.on('end', () => {
//   console.log('Finished reading the file');
// });

//       creating directory
// fs.mkdir('folder',{recursive:true},(err)=>{
//     if(err)throw err
//     console.log("created")
// })

for (let index = 1; index < 11; index++) {
   fs.writeFile(`new${index}.txt`,`this is new${index} file`,(err)=>{
    if(err)throw err
    console.log(`new${index} file created`)
   })
    
}