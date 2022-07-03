
// Regular map() method/func

const names = ['ahmad', 'dahsan', 'hasan', 'puel'];

const res = names.map((name) => `${name}!`);
console.log(res);



// Below is a handmade map() method/func
const fruits = ['Apple','Oranges','Bananas','Cherries','Strawberries'];

const MapDis = (arr, action) => {
  const looper = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return looper(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return looper(arr, action);
}

const newFruit = MapDis(fruits, (fruit) => `${fruit}!`)

console.log(newFruit);


//Reusable function

const tech = ['phone','n-1000','smart toaster'];

tech.forEach((tec) => {
  console.log(`${tec} has been created`)
})

// Above is one of many