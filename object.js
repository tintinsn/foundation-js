// const person = {
//     name: 'Jom',
//     age: 24,
//     pet: {
//         kind: 'dog',
//         age: 2,
//     }
// }

// const keyName = 'name'

// console.log(person.name)
// console.log(person[keyName])

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((data, idx) => {
  console.log(
    `Person ${idx + 1} \nName: ${data.name} \nAge: ${data.age} \nJob: ${
      data.job
    } \n---------------------`
  );
});
