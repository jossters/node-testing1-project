function trimProperties(obj) {
  const newObj = {...obj}
  Object.keys(newObj).map(o => newObj[o] = newObj[o].trim())
  return newObj
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(o => {obj[o] = obj[o].trim()})
  return obj
}

function findLargestInteger(integers) {
  var highest = integers[0]
  Object.keys(integers).map(int => {
    if (integers[int].integer > highest.integer) {
      highest = integers[int]
    }
  })
  return highest.integer
}

class Counter {
  constructor(initialNumber) {
    this.number = initialNumber + 1
  }

  countDown() {
    // ✨ implement
    if (this.number > 0) {
      this.number -= 1
    } else {
      this.number
    }
    return this.number
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.currentSeason = 'spring'
  }

  next() {
    let nextSeason = this.seasons.findIndex(foo => foo === this.currentSeason)

    this.currentSeason = this.seasons[nextSeason + 1]
    if(!this.currentSeason) {
      this.currentSeason = 'summer'
    }

    return this.currentSeason
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
    if (((this.tank*this.mpg) - distance) >= 0) {
        this.odometer = this.odometer + distance;
        this.tank = ((this.tank*this.mpg) - distance)/this.mpg;
        return this.odometer
      } else {
        distance = distance - (this.tank*this.mpg);
        this.odometer = this.odometer + (this.tank*this.mpg);
        this.tank = 0;
        return (`ran out of after ${this.odometer} miles`);
      }
  }

  refuel(gallons) {
    if(this.tank === this.tankSize) {
      return this.tank
    } else if ((this.tankSize - this.tank) < gallons) {
      this.tank = this.tankSize
    } else {
      this.tank += this.tank + gallons
    }
    return this.tank
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
function isEvenNumberAsync(number) {
  // ✨ implement
  if (!number || typeof number !== "number") {
    throw new Error(`number must be a number`)
  }
  if(number%2 === 0) {
    return true
  } else {
    return false
  }
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
