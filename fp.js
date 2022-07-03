const car = {
  type: 'bmw',
  year: 2003
}

const setType = (newType, car) => {
  return {...car, type : newType, color: 'red'}
}

const car2 = setType('mercedez', car)

console.log({car})
console.log({car2})