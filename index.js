function trimProperties(obj) {
  const result = {}
  for (let prop in obj){
    result[prop] = obj[prop].trim()
  }
  return result
}

function trimPropertiesMutation(obj) {
  for (let prop in obj){
    obj[prop] = obj[prop].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let result = integers[0].integer
  for (let idx = 1; idx < integers.length; idx++){
    if (integers[idx].integer>result) {
      result = integers[idx].integer
    }
  }
  return result
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber
  }

  countDown() {
    return this.count > 0 ? this.count-- : 0
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.currentSeason = 0
  }

  next() {
    const result = this.seasons[this.currentSeason]
    if (this.currentSeason === 3) {
    this.currentSeason = 0
    } else {
      ++this.currentSeason
    }

    return result
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0
    this.tank = tankSize
    this.tankSize = tankSize
    this.mpg = mpg
    this.name = name
  }

  drive(distance) {
   const milesCanDrive = this.tank * this.mpg
   if (distance <= milesCanDrive) {
     this.odometer = this.odometer + distance 
     this.tank = this.tank - (distance / this.mpg)
     return this.odometer
   } else {
     this.odometer = this.odometer + milesCanDrive
     this.tank = 0
   }
   return this.odometer
  }

  refuel(gallons) {
   if (gallons <= this.tankSize - this.tank) {
     this.tank = this.tank + gallons
   } else {
     this.tank = this.tankSize
   }
   return this.tank * this.mpg
}
}
/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
async function isEvenNumberAsync(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error('number must be a number')
  }
  return number % 2 === 0 || false
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
