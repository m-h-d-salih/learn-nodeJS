const fetchdata=async()=>{
    console.log(`fetching data ....`);
    try {
        const data=await new Promise((resolve,reject)=>{
           setTimeout(() => {
             resolve('hiii')
           }, 2000);
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchdata()