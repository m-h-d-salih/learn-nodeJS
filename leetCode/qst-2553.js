var separateDigits = function(nums) {
    const result=[];
    nums.forEach(item=>{
        let temp=item.toString().split('')
        temp.forEach(i=>{
            result.push(parseInt(i));
        })
    })
    return result;
};
console.log(separateDigits([7,1,3,9]))