// const arr = [1, 2, 3, 4, 5]

// const reverse = (arr) => {
//     let newArr =[]
//     for(let i = arr.length -1; i >= 0; i--) {
//          newArr.push(arr[i])
//     }
//     return newArr;
// }

// console.log(reverse(arr));

// 3.

// const isMember = (mem, arr) => {
//   let ex = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (mem === arr[i]) {
//       ex = true;
//     }
//   }
//   return ex;
// };
// // console.log(isMember(3, [1, 3, 7, 12]));

// // 4.
// const arr = [10, 20, 10, 20, 30, 50, 60, 100];

// const unique = (arr) => {
//   let result = [];
//   const lenArr = [...arr].length;
//   let shiftNum = 0;
//   for (let i = 0; i < lenArr; i++) {
//     shiftNum = arr.shift();
//     if (isMember(shiftNum, arr) === false) {
//       result.push(shiftNum);
//     }
//   }
//   return result;
// };

// console.log(unique(arr));

// 5.

// const draw = (n) => {
//   let str = "";
//   let totalStr = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       str += "*";
//     }
//     totalStr += `${str}\n`;
//     str = "";
//   }

//   return totalStr;
// };

// const draw = n => {
//     let totalStr = ''
//     for(let i = 0; i < n; i++) {
//         const str = '*'
//         totalStr += `${str.repeat(n)}\n`
//     }
//     return totalStr;
// }

// console.log(draw(5));

// 6.
// const draw = (n) => {
//   let str = "";
//   let totalStr = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     totalStr += `${str}\n`;
//     str = "";
//   }
//   return totalStr;
// };

// const draw = n => {
//     let totalStr = ''
//     for(let i = 0; i < n; i++) {
//         const str = '*'
//         totalStr += `${str.repeat(i+1)}\n`
//     }
//     return totalStr;
// }

// console.log(draw(5));

// 7.
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// const mutual = (arr1, arr2) => {
//   return arr1.filter((user) => arr2.indexOf(user) >= 0);
// };
// console.log(mutual(class1, class2)); // ["John", "Bob"]

// 8.
// const fizzBuzz = n => {
//     for(let i = 1; i <= n; i++) {
//         if(i % 5 === 0 && i % 3 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);

// 9

// const gcd = (a, b) => {
//   const findFactors = (num) => {
//     const result = [];
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         result.push(i);
//       }
//     }
//     return result;
//   };

//   const factorOfA = findFactors(a);
//   const factorOfB = findFactors(b);
//   const mutualFactors = factorOfA.filter(
//     (factor) => factorOfB.indexOf(factor) >= 0
//   );

//   const GCD = Math.max(...mutualFactors);
//   return GCD;
// };
// console.log(gcd(60, 36));

// 10
// const arr = [120, 112, 111, 130, 169, 101];

// const filterLt = (n, arr) => {
//   const ltArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     n > arr[i] ? ltArr.push(arr[i]) : null;
//   }
//   return ltArr;
// };

// console.log(filterLt(0, arr));
// console.log(filterLt(112, arr));

// 11

// const arr = [120, 112, 111, 130, 169, 101];
// const filterGt = (n, arr) => {
//   const gtArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     n < arr[i] ? gtArr.push(arr[i]) : null;
//   }
//   return gtArr;
// };

// console.log(filterGt(0, arr)); // [120, 112, 111, 130, 169, 101]
// console.log(filterGt(112, arr)); // [120, 130, 169]

// 12
// const compoundedReturn = (amount, interest, n) => {
//   let currAmount = amount;
//   let currInterest = interest;
//   for (let i = 1; i <= n; i++) {
//     currInterest = (currAmount / 100) * currInterest;
//     currAmount = currAmount + currInterest;
//   }
//   return currAmount;
// };

// console.log(compoundedReturn(100, 10, 3)) // 121

// 13
// const mean = (arr) => {
//   let sum = 0;
//   const isNum = arr.every((val) => typeof val === "number");
//   if (isNum) {
//     sum = arr.reduce((preVal, currVal) => preVal + currVal, 0);
//     return sum / arr.length;
//   } else {
//     return null;
//   }
// };

// console.log(mean([1, 6, 2]));

// ? 14.Write a function mid(arr)

// * mid(arr) returns the array containing middle element(s) of array arr.

// * If the array length is an even number, mid returns the 2 middle elements.

// const mid = (arr) => {
//   // declar variable to receive result
//   const result = [];

//   // find number of member in array
//   const arrNew = arr.length;
//   const idxMid = Math.floor(arrNew / 2);

//   // check that it's even number or odd number
//   if (arrNew % 2 === 0) {
//     result.push(arr[idxMid - 1], arr[idxMid]);
//   } else {
//     result.push(arr[idxMid]);
//   }
//   return result;
// };

// console.log(mid(["john"])); // ["john"]
// console.log(mid(["foo", "bar", "baz"])); // ["bar"]
// console.log(mid([1, 2, 3, 4])); // [2, 3]

// ? 15.Try learning Array.sort method (function) with this snippet:
// const arr = [3, 2, 1, 12, 13, 11];
// arr.sort((a, b) => a - b);

// console.log(arr); // [1, 11, 12, 13, 2, 3]

// ? 16. Write a function median(arr)

// const median = (arr) => {
//   const newArr = arr.sort((a, b) => a - b);
//   const result = mid(newArr);
//   return result;
// };

// console.log(median([2, 1, 5, 3, 4]));

// ? 17. Write a function initArr(val, len)
// * initArr(val, len) returns an array of length len with all members initialized to val.

// // create function with 2 paramiter (val,len)
// const initArr = (val, len) => {
//   let newArr = [];
//   // loop len time
//   for (let i = 0; i < len; i++) {
//     newArr.push(val); // each time push val in to array
//   }
//   return newArr; // return new array
// };

// console.log(initArr("jom", 5));

// ? 18.how to check nested array in javascript
// * flatMap(arr) takes in an array of arrays, and returns the flattened array.
// const arr = [12, [1, 2, 3], 3, [100, 200], [10, 20]];
// const flatMap = (arr) => {
//   // function check it's an array
//   const isArr = (val) => Array.isArray(val);
//   let newArray = [];

//   if (!isArr(arr)) return; // if not array return

//   //   loop to check element in array is it an array?
//   for (let i = 0; i < arr.length; i++) {
//     if (isArr(arr[i])) {
//       //if it's nested array loop into that array
//       arr[i].map((num) => newArray.push(num)); // loop in array and push in new array
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };

// console.log(flatMap(arr));

// ? 19. Write a function mapMean(arr)
// * mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].
// const arr = [[1, 2, 3], [100, 200], 4, [10, 20]];

// const mapMean = (arr) => {
//   const meanArr = [];

//   //loop in array outerest
//   for (let i = 0; i < arr.length; i++) {
//     // if it's just a number not array can push it to array without have to find mean
//     if (typeof arr[i] === "number") {
//       meanArr.push(arr[i]);
//     }

//     if (Array.isArray(arr[i])) {
//       const findMean = mean(arr[i]); // find mean average of that array by using mean() in exercise 13.
//       meanArr.push(findMean);
//     }
//   }
//   return meanArr;
// };
// console.log(mapMean(arr));

// ? 20 Write a function fib(n)
// * fib(n) prints the Fibonacci series up to n terms.

// ? 21.Write a function toBytes(s)
// * toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.
// * If a character in s is invalid ASCII, the character is omitted from the returned array.

// const toBytes = (s) => {
//   const charCode = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].match(/[a-z]/i)) {
//       const asCode = s.charCodeAt(i);
//       charCode.push(asCode);
//     }
//   }
//   return charCode;
// };
// const bar = "Bar";
// const foo = "Foo";
// const fooFire = "Foo🔥";

// toBytes(bar); // [ 66, 97, 114 ]
// toBytes(foo); // [ 70, 111, 111 ]
// toBytes(fooFire); // [ 70, 111, 111 ] because the emoji is invalid ASCII

// console.log(toBytes(bar)); // [ 66, 97, 114 ]
// console.log(toBytes(foo)); // [ 70, 111, 111 ]
// console.log(toBytes(fooFire)); // [ 70, 111, 111 ] because the emoji is invalid ASCII

// ! MEDIUM

// ? 1.Write a function maxNegMinPos(arr)

// * maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

// const arr = [12, -13, 14, 4, 2, 6, -1, -18, 6];

// const maxNegMinPos = (arr) => {
//   const pos = []; // create variable in order to receive only positive number
//   const neg = []; // create variable in order to receive only negative number

//   //   loop in array(arr) to filter negative and positive number
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0 ? pos.push(arr[i]) : neg.push(arr[i]);
//   }

//   //   sort element in arrat in order to find min and max
//   const minPos = pos.sort((a, b) => a - b); //sort from min to max
//   const maxNeg = neg.sort((a, b) => b - a); //sort from max to min
//   console.log(`MinPos is  ${minPos[0]} \nMaxNeg is ${maxNeg[0]}`);
// };

// maxNegMinPos(arr);
