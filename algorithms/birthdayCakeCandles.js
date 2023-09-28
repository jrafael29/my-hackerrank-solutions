function birthdayCakeCandles(candles) {
    // Write your code here
    const arraySort = candles.sort()
    const maxValue = arraySort[arraySort.length - 1]
    const velasSopradas = candles.reduce((acumulado, valor) => {
        if(valor >= 1 && valor <= 10000000)      {
            if(valor == maxValue){
                return acumulado + 1
            }
        }
        return acumulado
    }, 0)
    console.log(velasSopradas)
}

