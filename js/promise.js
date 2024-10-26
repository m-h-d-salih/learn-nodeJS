const fetchdata=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello")
    }, 3000);
})
fetchdata.then((res)=>console.log(res)).catch(err=>console.error(err))