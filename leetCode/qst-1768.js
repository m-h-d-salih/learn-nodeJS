var mergeAlternately = function(word1, word2) {
    const result=[];
    for(let i=0;i<word1.length+word2.length;i++){
        word1[i]?result.push(word1[i]):null;
        word2[i]?result.push(word2[i]):null;
    }
    return result.join('');
};
console.log(mergeAlternately("abcd","pq"))