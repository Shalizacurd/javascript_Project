let arr = [2, 7, 11,15, 3, 6];
let target = 9;

function findPair(arr, target){
let seenNumbers = {}
let pairs =[]
for(let num of arr){
    let complement = target-num;
    if(seenNumbers[complement]){
        pairs.push([complement,num]);
    }
    seenNumbers[num]=true;
}
return pairs
}
console.log(findPair(arr,target));