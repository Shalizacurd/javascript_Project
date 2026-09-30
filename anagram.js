let string1 = "listen"
let string2 = "silent"

function string(string1,string2){
   if(string1.length !== string2.length) {
       return false
   }
    let frequency = {};
    for(let char of string1){
        frequency[char]= (frequency[char] || 0) +1
    }
     for(let char of string2){
        console.log(frequency[char]);
         if (!frequency[char]){
             return false
         }
        frequency[char]--;
    }
    return true
}
console.log(string(string1,string2))