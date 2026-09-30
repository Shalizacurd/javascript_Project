let str = "programming";
function repeatString(str) {
    let frequency = {}
    let ans = ""
    for (let char of str) {
        frequency[char] = ((frequency[char] || 0) + 1);
    }
    
    Object.keys(frequency).forEach(key => {
        ans = ans + key
    })
    return ans;
}
console.log(repeatString(str))
