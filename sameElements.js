let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

let common = a.filter(item => b.includes(item));
console.log(common);