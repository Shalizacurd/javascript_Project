//repeated "o" in the string
//let word = "automation";
//let count = word.split("a").length - 1;
//console.log(count); 

let word = "shaliza kaushal"
let target = "a"
function repeatString(word, target) {
    let count = 0;
    for (let char of word) {
        let lowerCase = char.toLowerCase();
        if (target.includes(lowerCase)){
            count++;
        }
    }
    return count;

}
console.log(repeatString(word, target));