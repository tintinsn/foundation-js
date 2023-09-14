// 1

// const str = 'George Raymond Richard Martin';

// const word = str.split(' ');

// const firstChar = word.map((char) => {
//   return char[0]
// })
// firstChar.join()
// console.log(typeof firstChar.join(''));


// 2. Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];

const positiveNum = input.filter((num) => {
    return num > 0
})

const sum = positiveNum.reduce((preVal,))
console.log(positiveNum)
