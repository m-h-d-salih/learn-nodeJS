var duplicateZeros = function(arr) {
    let len=arr.length,count=0;
    for(let i=0;i<arr.length;i++){
       count++;
       if(arr[i]===0){
           arr.splice(i,0,0)
          i++;
       }
   }
   let len2=arr.length
   while(len2>len){
       arr.pop()
       len2--;
   }
    return arr
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))