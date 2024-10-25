const MinimumCommonValue=(num1,num2)=>{
    const result=[];
    num1.forEach(element => {
     num2.forEach(item=>{
         if(element===item){
             result.push(element)
         }
     })
    });
    return result.sort((a,b)=>a-b)[0]
 }
 console.log(MinimumCommonValue([1,2,3,6],[2,3,4,5]))