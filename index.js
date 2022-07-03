// import fetch from 'fetch'
import fetch from 'node-fetch'

(async function() {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
data.map((dat) => console.log(`${dat.name} || ${JSON.stringify(dat.address, null, 4)}`))
console.log(data)
})()

function printArr(){
const arr = ['dat0','dat1','dat2','dat3','dat4']
  const res = [];
  for(let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    
  }
  return res;
}

const aggR = printArr()
console.log(aggR)


const arr1 = [1,2,3,4,5,6];
const arrNew = arr1.map((ar) => `${ar}`)

console.log(arrNew);