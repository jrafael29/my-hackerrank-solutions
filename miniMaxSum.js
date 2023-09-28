function miniMaxSum(arr) {
    // Write your code here
    const minSum = arr.sort().slice(0, -1).reduce((accumulator, currentValue) => {
        if (currentValue <= 1 && currentValue >= 1000000000) {
            return accumulator;
        }
        return accumulator + currentValue
    }, 0)
    const maxSum = arr.sort().reverse().slice(0, -1).reduce((accumulator, currentValue) => {
        if (currentValue <= 1 && currentValue >= 1000000000) {
            return accumulator;
        }
        return accumulator + currentValue
    }, 0)
    console.log(minSum, maxSum)
}