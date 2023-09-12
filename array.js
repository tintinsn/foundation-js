const myArr = ["Men", 22];

console.log(myArr[3]);

myArr.push("Wed");
myArr.push(2000);

const newArr = myArr.slice(1, 3);

console.log(myArr);
console.log(newArr);

const foods = ["pizza", "shabu", "chicken", "hamberger"];

const mostFavoriteFood = foods.indexOf("shabu");
console.log(mostFavoriteFood);

const newFoods = foods.concat("mango", "watermelon", "banana");
console.log(newFoods);

const findFavoriteFood = newFoods.includes("shabu");
console.log(findFavoriteFood);
