// Creating Arrays of Items, price and stocking
let itemNames = ["Book", "DVD", "Blueray"]
console.log(itemNames);

let itemPrice = ["$6.00", "$15.00", "$22.00"]
console.log(itemPrice);

let inStock = ["Yes", "Yes", "No"]
console.log(inStock);

// Creating two variables for item and price

let firstItemname = itemNames[0];
let firstItemprice = itemPrice[0];
console.log(firstItemname)
console.log(firstItemprice)

// adding new item, price and stocking info to Arrays

itemNames.push ("Game")
console.log(itemNames)

itemPrice.push ("$79.00")
console.log(itemPrice)

inStock.push ("No")
console.log(inStock);

// Variables removing items using Pop

let lastItemnamed = itemNames.pop();
console.log(lastItemnamed);
let lastItemprice = itemPrice.pop();
console.log(lastItemprice);
let lastItemstock = inStock.pop();
console.log(lastItemstock);
