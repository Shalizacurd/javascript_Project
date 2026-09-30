let arr = [1, 2, 2, 3, 3, 3, 4];
function repeat(Arr){
    let frequency = {}
    for ( let num of arr){
        frequency[num]= (frequency[num]||0)+1;
    }
    return frequency;
}
console.log(repeat(arr));