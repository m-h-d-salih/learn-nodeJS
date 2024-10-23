function mymap(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
         result.push(callback(arr[i],i,arr))
    }
    return result;
}
const numbers=[1,2,3,4];
const result=mymap(numbers,function(num){
    return num*2;
})
console.log(result);