function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = n; j >= 1; j--) {
            if (i >= j) {
                row += "#";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}