function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((accumulator, number) => {
        if(number > 0 || number <= 1000){
            return accumulator + number
        }
    })
}