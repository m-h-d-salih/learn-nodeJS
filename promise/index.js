// (((8*3) + (15-5))/4) - ((9/3) * (2+6))

function calculate(operation,a,b){
    return new Promise((resolve,reject)=>{
        let result;
        switch(operation){
            case 'add':result=a+b;
            break;
            case 'sub':result=a-b;
            break;
            case 'mul':result=a*b;
            break;
            case 'div':result=a/b;
            break;
            default:reject('invalid')
        }
        resolve(result)
    })
}
async function result(){
    let a=await calculate('mul',8,3);
    let b=await calculate('sub',15,5);
    let c=await calculate('add',a,b);
    let d=await calculate('div',c,4);
    let e=await calculate('div',9,3);
    let f=await calculate('add',2,6);
    let g=await calculate('mul',e,f);
    let h=await calculate('sub',d,g);
    return h;
}
result().then(val=>console.log(val))