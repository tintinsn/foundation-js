// // 1

// // const str = 'George Raymond Richard Martin';

// // const word = str.split(' ');

// // const firstChar = word.map((char) => {
// //   return char[0]
// // })
// // firstChar.join()
// // console.log(typeof firstChar.join(''));

// // 2. Sum of every positive element
// // If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input = [1, -4, 12, 0, -3, 29, -150];

// const positiveNum = input.filter((num) => {
//   return num > 0;
// });

// // 3.Age difference from the youngest and oldest
// // Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input2 = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// const age = input2.map((person) => {
//   return person.age;
// });

// const newAge


const salary = (flying, landing,transTrip,perdiem) {
  const baseSalary = 6750;
  const uniform = 600;

  const calFlying = flying => {
    if(flying > 80) {
      return  flying * 200;
    } else if (flying > 60) {
      return flying *180;
    } else if(flying > 40) {
      return flying * 120;
    } else {
      return flying * 50;
    }
  }

  let calLanding = 
}