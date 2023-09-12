// let grade = score => {
//     console.log(`You got ${score}`);
// }

// console.log(grade(85));

let grade = (score) => {
  score = Math.round(score);

  if (score >= 80) {
    console.log(`You got A`);
  } else if (score >= 70 && score <= 79) {
    console.log(`You got B`);
  } else if (score >= 60 && score <= 69) {
    console.log(`You got C`);
  } else if (score >= 50 && score <= 59) {
    console.log(`You got D`);
  } else if (score < 50) {
    console.log(`You got F`);
  } else if (score > 100 || score < 0) {
    console.log("score incorrect");
  }
};

console.log(grade(79.5));
