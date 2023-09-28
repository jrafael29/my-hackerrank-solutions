function weekdayText(weekdays) {
    //Implement your code here
    return (n) => {
        if (n < 0 || n > weekdays.length - 1) {
            throw new Error("Invalid weekday number");
        }
        return weekdays[n]
    }
}
