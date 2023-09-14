// const callMe = () => {
//     console.log('hello from callback function')
// }

// const greeting = (callback) => {
//     console.log('hello world')
//     callback()
// }

// greeting(callMe)

// greeting(function() {
//     console.log('from anonymus function');
// })

// greeting(() => {
//     console.log('from anonymus arrow function')
// })

// callback function with paramiter

// const greeting2 = (callback) => {
//   console.log("hello world");
//   callback("jom");
// };

// greeting2((name) => {
//   console.log(`hello from ${name}`);
// });

const originalArr = [1, 2, 3, 4];

// const loopThroughArrayV2 = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// };

// loopThroughArrayV2(originalArr, (item) => {
//   console.log(item);
// });

// const mapArr = (arr, cb) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newItem = cb(arr[i]);
//     result.push(newItem);
//   }
//   return result;
// };

// const newArr = mapArr(originalArr, (item) => {
//   return item * 2;
// });

// console.log(newArr);

// const arrCap = ["japan", "london", "korea", "paris"];

// const mapCap = (arr, cb) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newCap = cb(arr[i]);
//     result.push(newCap);
//   }
//   return result
// };

// const newCapArr = mapCap(arrCap, (item) => {
//   return item.toUpperCase();
// });

// console.log(newCapArr);

// Callback Function

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items
function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
});

console.log(afterFilter);
