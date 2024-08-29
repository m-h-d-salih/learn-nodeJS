var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{//req= request object,res=response object
    fs.readFile('index.html',(error,data)=>{
        
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
   
}).listen(8000)//port number