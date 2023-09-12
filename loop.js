function nomalLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
function reverseLoop() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}

// Nomal loop

function loopThroughArray() {
  const tripLocation = ["japan", "taipe", "london", "korea"];
  for (let i = 0; i < tripLocation.length; i++) {
    console.log(tripLocation[i]);
  }
}

// Reverse Loop
function reverseLoopThroughArray() {
  const tripLocation = ["japan", "taipe", "london", "korea"];
  for (let i = tripLocation.length - 1; i >= 0; i--) {
    console.log(tripLocation[i]);
  }
}

// Loop with break
function LoopThroughArrayBreak() {
  const tripLocation = ["japan", "taipe", "london", "korea"];
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "london") {
      break;
    }
    console.log(tripLocation[i]);
  }
}

// Loop with continue
function LoopThroughArrayContinue() {
  const tripLocation = ["japan", "taipe", "london", "korea"];
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "london") {
      continue;
    }
    console.log(tripLocation[i]);
  }
}

// LoopThroughArrayContinue();

// while loop
// let count = 1;
// while(count < 100) {
//     count = count + 2;
// }

// console.log(count);

function checkNumber() {
  for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

checkNumber();
