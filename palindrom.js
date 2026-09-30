let string = "madam";
function isPalindrome(str){
    let reverseString =""
    for(let i = str.length-1;i>=0;i--){
        reverseString += str[i];
    }
    return str === reverseString;
}
console.log(isPalindrome(string));
console.log(isPalindrome("hello"));