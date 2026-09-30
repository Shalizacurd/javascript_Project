let word = "automation testing"
function countVowel(str){
    let count =0;
    let vowel = "aeiou"
    for(let char of str){
            let lowerCaseStr = char.toLowerCase();
        if (vowel.includes(lowerCaseStr)){
            count++;
        }
    }
    return count;
}
console.log(countVowel(word))