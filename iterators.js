const prices = [10, 15, 20, 25, 33,44,55];

// prices.forEach((price,idx) => {
//     console.log(idx, price)
// })

// Map

// const newPrices = prices.map((price) => {
//   return price * 1.1;
// });

// console.log(newPrices);


// Filter Method

// const premiumPrices = prices.filter(price => {
//   return price > 30;
// })

// console.log(premiumPrices)

// Reduce 

const sumPrice = prices.reduce((preVal, price) => {
  return preVal + price;
})

console.log('Sum Price: ', sumPrice)