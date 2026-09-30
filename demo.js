let word = "Automation";
function count(word) {
    let vowel = "aeiou";
    let count = 0;
    for (let char of word) {
        let wordLowercase = char.toLowerCase();
        if (vowel.includes(wordLowercase)) {
            count++;
        }
    }
    return count;
}

console.log(count(word));
