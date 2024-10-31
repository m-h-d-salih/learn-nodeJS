var furthestDistanceFromOrigin = function(moves) {
    let distance=0,distance2=0;
    for(let dir of moves){
        if(dir === 'R'){
            distance++;
            distance2++;
        }
       else if(dir === 'L'){
            distance--;
            distance2--;
        }
        else{
            distance--;
            distance2++;
        }
    }
    return Math.max(Math.abs(distance),Math.abs(distance2))
};
console.log(furthestDistanceFromOrigin("_R__LL_"))