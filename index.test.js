
const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual === input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [ {integer: -2}, {integer: -7}, {integer: -5}, {integer: -1} ]
    const expected = -1
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3)
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for(let i=1; i <= 10; ++i) {
      counter.countDown()
    }
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => { 
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const testSummer = seasons.next()
    expect(testSummer).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let testFall = ""
    for(let i=1; i<=2; i++) {
      testFall = seasons.next()
    }
    expect(testFall).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let testWinter = ""
    for(let i=1; i<=3; i++) {
      testWinter = seasons.next()
    }
    expect(testWinter).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let testSpring = ""
    for(let i=1; i<=4; i++) {
      testSpring = seasons.next()
    }
    expect(testSpring).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let testSummerAt5 = ""
    for(let i=1; i<=5; i++) {
      testSummerAt5 = seasons.next()
    }
    expect(testSummerAt5).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let testSpringAt40 = ""
    for(let i=1; i<=40; i++) {
      testSpringAt40 = seasons.next()
    }
    expect(testSpringAt40).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30)
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    focus.drive(112)
    expect(focus.odometer).toBe(212)
    const tooFar = focus.drive(500)
    const ranOut = `ran out of after 600 miles`
    expect(focus.odometer).toBe(600)
    expect(tooFar).toBe(ranOut)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(120)
    expect(focus.tank).toBe(16)
    focus.drive(30)
    expect(focus.tank).toBe(15)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.tank = 0
    focus.refuel(20)
    expect(focus.tank).toBe(20)
    focus.drive(120)
    expect(focus.tank).toBe(16)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(10)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const number = await utils.isEvenNumberAsync(42)
    expect(number).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const number = await utils.isEvenNumberAsync(99)
    expect(number).toBe(false)
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    expect(() => utils.isEvenNumberAsync("twelve")).toThrow(`number must be a number`)
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    expect(() => utils.isEvenNumberAsync()).toThrow(`number must be a number`)
  })
})