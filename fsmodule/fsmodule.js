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