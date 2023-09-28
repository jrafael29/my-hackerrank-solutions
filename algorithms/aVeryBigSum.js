function aVeryBigSum(ar) {
    // Write your code here
    return ar.reduce((accumulator, value) => {
        if(value >= 1 || value <= 1000000000){
            return accumulator + value
        }
    })
}