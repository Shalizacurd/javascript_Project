//second largest number
let arr = [12, 45, 7, 89, 34, 89, 23];
for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
}
console.log("second smallest number is" + arr[1]);