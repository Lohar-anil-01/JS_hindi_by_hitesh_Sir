/* reduce method */ 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let mySum = myNumbers.reduce((acc, curr) => acc+ currval, 0);

// let myTotal = myNumbers.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0);

let myTotal = myNumbers.reduce((acc, curr) => (acc+curr), 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "Node.js backend course",
        price: 3999
    },
    {
        itemName: "React.js backend course",
        price: 1599
    },
];

/* let totalPrice = shoppingCart.reduce((acc, currval) => (acc+currval.price), 0)
   console.log(totalPrice); */

let priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay);

