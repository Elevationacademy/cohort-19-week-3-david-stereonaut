// Exercise 4

const sumOfThree = (a, b ,c) => a + b + c

console.log(sumOfThree(1, 3, 5))

// Exercise 5

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

capitalize("bOb")// returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

// Exercise 6

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`

console.log(commentOnWeather(26))