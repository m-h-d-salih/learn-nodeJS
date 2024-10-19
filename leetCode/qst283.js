var moveZeroes = function(nums) {
    let pos=0;
    for(let i of nums){
        if(i!==0){
            nums[pos]=i;
            pos++
        }
    }
    while(pos<nums.length){
        nums[pos]=0;
        pos++;
    }
    return nums;
};