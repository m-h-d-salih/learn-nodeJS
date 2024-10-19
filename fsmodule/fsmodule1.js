const fs=require('fs')


fs.readFile('sample.txt','utf-8',(err,data)=>{
    console.log(data)
})
// fs.appendFile('sample.txt','\n hello everyone',(err)=>{
    setImmediate(()=>{
        console.log('immediate')
    })
//     console.log('done')
// })
// fs.writeFile('sample1.txt','hello guyss',(err)=>{
//     if(err) throw err
//     console.log('done')
// })
