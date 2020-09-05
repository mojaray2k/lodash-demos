// the important difference between vanilla js map and lodash _.map is you can chain it to another lodash method and you can work with objects with Lodash for each.

var newArr = [1,2,3].map((item) => item);
console.log(newArr);

// var newArrayLodash = _.map([{id: 1, name: 'John'}, {id: 2, name: 'Jack'}], (item) =>  item.id );
// don't pass a anonymous function just pass the the key of the array you want to get
var newArrayLodash = _.map([{id: 1, name: 'John'}, {id: 2, name: 'Jack'}], "id");
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

// Map Quiz
var users = [
  {
    id: 1,
    first_name: 'John',
    status: 'active'
  },
  {
    id: 2,
    first_name: 'Mike',
    status: 'inactive'
  }
]

// transition the array to this below
// var users = [
//   {
//     id: 1,
//     firstName: 'John',
//     isActive: true
//   },
//   {
//     id: 2,
//     firstName: 'Mike',
//     isActive: false
//   }
// ]

function normalizeUsers (users) {
  return _.map(users, (user) => {
    return {
      id: user.id,
      firstName: user.first_name,
      isActive: user.status === 'active'
    }
  } )
}

console.log(normalizeUsers(users));
