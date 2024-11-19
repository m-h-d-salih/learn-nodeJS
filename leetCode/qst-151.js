var reverseWords = function(s) {
    const arr=s.trim().split(' ').reverse()
    const result=arr.filter(item=>item!=='');
    return result.join(' ');
};
console.log(reverseWords("the sky is blue"))