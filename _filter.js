// _.filter method always returns an array

var users = {
  1: {
    id: 1,
    name: 'John',
  },
  2: {
    id: 2,
    name: 'Jack',
  },
}

var usersArr = _.filter(users, (item) => item.name === 'John');
console.log('With function', usersArr);

var usersArr = _.filter(users, {name: 'John'});
console.log('Without function', usersArr);

var numbersArr = _.filter([1,2,3,4,5], (item) => item < 3);

console.log("Filtering numbers", numbersArr);

// filter quiz
var products = [
  {
    id: 1,
    name: 'milk',
    price: '$1'
  },
  {
    id: 2,
    name: 'bread',
    price: '$2'
  },
  {
    id: 3,
    name: 'meat',
    price: '$3'
  }
]

// use the vanilla js method includes - this method is not supported in all browsers
function searchProductsVanillaIncludes (products, searchedValue){
  return _.filter(products, (product) => product.name.includes(searchedValue));
}

console.log('Lodash filter method using vanilla Includes',searchProductsVanillaIncludes(products, 'm'));

// use the lodash method _.includes - this method is supported in all browsers 
function searchProductsLodashIncludes (products, searchedValue){
  return _.filter(products, (product) => _.includes(product.name, searchedValue));
}

console.log('Lodash filter method using Lodash Includes',searchProductsLodashIncludes(products, 'm'));