const fs=require('fs')

//read file
//fs.readFile(filename,encoding,callback(error,data))
fs.readFile('text.txt','utf-8',(error,data)=>{
    if (error) {
        console.log(`error ${error}`)
    }
    else{
        console.log(data)
    }
})
//what if i didnt give utf-8
fs.readFile('text.txt',(error,data)=>{
    if (error) {
        console.log(`error ${error}`)
    }
    else{
        console.log(data)  //it prints a binary data
    }
})
// creating a file
fs.writeFile('new.txt','this is a new file created by node js',(error)=>{
    if (error) {
        console.log('error'+error)
        
    }
    console.log('file created')
})
//append file

fs.appendFile('new.txt',' hello iam  node js',(error)=>{
    if (error) {
        console.log('error')
    }
    console.log('file appended')
})
//rename
fs.rename('text.txt','sample.txt',(error)=>{
    error?console.log(error):console.log('renamed successfully')
})
//delete
fs.unlink('new.txt',(error)=>{
    error?console.log(error):console.log('deleted successfully')

})