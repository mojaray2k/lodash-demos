// the important difference between vanilla js map and lodash _.map is you can chain it to another lodash method and you can work with objects with Lodash for each.

var newArr = [1,2,3].map((item) => item);
console.log(newArr);

var newArrayLodash = _.map([{id: 1, name: 'John'}, {id: 2, name: 'Jack'}], (item) =>  item.id );
console.log(newArrayLodash);

var users = {
  1: {
    name: 'John',
  },
  2: {
    name: 'Jack',
  },
}

var userNames = _.map(users, (user) => user.name)

console.log(userNames);
