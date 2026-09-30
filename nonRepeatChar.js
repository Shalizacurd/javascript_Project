//Find the first non-repeating character

let str = "aabbcde";
function nonRepeatChar(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str) {
    if (frequency[char] == 1) {
      return char;
    }
  }
  return null;
}
console.log(nonRepeatChar(str));