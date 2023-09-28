function getFixedCounter(k) {
    // write your code here
    let counter = k;
    return {
        increment() {
            counter = counter + 1;
            return counter;
        },
        decrement() {
            counter = counter - 1;
            return counter;
        },
        getValue() {
            return counter;
        }
    }
}
