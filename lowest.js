const heights = [65,66,68,72,78,60,65,66];

function getMin(number){
    let min = number[0];
    for(const num of number){
        
        if( num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log(min);