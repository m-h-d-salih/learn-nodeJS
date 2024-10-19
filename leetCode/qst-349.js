var intersection = function(nums1, nums2) {
    let set1=new Set(nums1);
    let set2=new Set(nums2);
    const result=[];
    for(let i of set1){
        if(set2.has(i)){
            result.push(i)
        }
    }
    return result;
};