var http=require('http')
http.createServer((req,res)=>{//req= request object,res=response object
    
    res.write("first server")
    res.end()
}).listen(8000)//port number