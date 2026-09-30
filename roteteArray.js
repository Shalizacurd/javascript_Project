let arr = [1,2,3,4,5]
let k = 2;
function rotate(arr,k){
    let n = arr.length;
    k = k%n;
    let backpart = arr.slice(n-k)
    let frontpart = arr.slice(0,n-k)
   // return backpart.concat(frontpart)
   return [...backpart,...frontpart]
}
console.log(rotate(arr,k))