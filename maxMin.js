//find amx and min numbers in an array
let arr = [2, 7, 11, 15, 3, 6];

function numbers(nums) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            max = arr[i];
        }
        else if (arr[i] < arr[i + 1]) {
            min = arr[i]
        }
    }
    return { min: min, max: max }
}


console.log(numbers(arr));