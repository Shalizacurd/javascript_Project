let arr = [1, 3, 4, 3, 5, 1, 6];
let duplicate = arr.filter((duplicate,index)=>arr.indexOf(duplicate)!==index);
console.log(duplicate);