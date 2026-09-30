let arr = [0, 1, 0, 3, 12];
let writter = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[writter]=arr[i];
    writter++;
    }
}
//console.log(writter);
//console.log(arr);
while(writter<arr.length){
    arr[writter]=0;
    writter++;
}
console.log(arr);