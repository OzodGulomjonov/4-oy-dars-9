let products = [
    {
        name: "iPhone 13",
        price: 1100
    },
    {
        name: "MacBook Pro",
        price: 1400
    },
    {
        name: "iPad Pro",
        price: 900
    },
    {
        name: "AirPods",
        price: 199
    }
];


let USD_TO_UZS = 11000;

[

]




let newArray = products.map(function(item) {
    let itemPriceInUSD = item.price
    let itemPriceInUZS = item.price * USD_TO_UZS

    return {
        name: item.name,
        priceInUZS: itemPriceInUZS,
        salesInUZS: itemPriceInUZS * 0.9,
        discountInUZS: (itemPriceInUZS * 0.1).toFixed(2),
        priceInUSD: itemPriceInUSD,
        salesInUSD: itemPriceInUSD * 0.9,
        discountInUSD: (itemPriceInUSD * 0.1).toFixed(2),
    }
})

let sortedArray = newArray.sort((a,b) => a.priceInUSD - b.priceInUSD);


// let result = [];


// for (const item of sortedArray) {
//     if (item.name.includes("Pro")) {
//         result.push(item)
//     }
// }

let result =  sortedArray.filter(item => item.name.toLowerCase().includes("Pro".toLowerCase()))

// console.log(result);

// let sum = 0

// for (let i = 0; i < products.length; i++) {
//     sum += products[i].price
    
// }\


// let sum = products.reduce(function(total, item) {
//     return total - 700000
// }, 4900000)


// let arrays = [1,2,3,4,5,6,7, [8,9,10,[8,9,10]]].flat().flat()

// console.log(arrays);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))