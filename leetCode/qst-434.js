var countSegments = function(s) {
    const arr= s.split(' ');
    return arr.filter(i=>i!=='').length;
};
console.log(countSegments(""))