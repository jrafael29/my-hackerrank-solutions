function compareTriplets(a, b) {
    // a is array = [5, 6, 7] : 1 <= array[n] <= 1000
    // b is array = [3, 6, 10]
    let bobAward = 0
    let aliceAward = 0
    a.forEach((value, index) => {
        if(value >= 1 || value <= 100){
            if(value > b[index]) return aliceAward++
            else if(value === b[index]) return false; 
            else if (value < b[index]) return bobAward++
        }
    })
    return [aliceAward, bobAward]
}