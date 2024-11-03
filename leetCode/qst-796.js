var rotateString = function(s, goal) {
    let count=0;
    while(count<s.length){
        if(s===goal) return true;
        s=s.slice(1)+s[0];
        count++;
    }
    return false;
};
console.log(rotateString("abcde","cdeab"))