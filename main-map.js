var newArr = [1,2,3].map((item) => {
    return item;
})

// console.log('newArr ',newArr);

var users= [{id: 1, name: 'John'}, {id: 2, name: 'Jack'}];

// var newArrLodash = _.map(users, (item) => item.id);
var newArrLodash = _.map(users, 'id');
console.log('newArrLodash ', newArrLodash);

var users = {
    1: {
        name: 'John'
    },
    2: {
        name: 'Jack'
    }
}

var userNames = _.map(users, (user) => user.name);

// console.log(userNames);

// map quiz
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

// var users = [
//     {
//         id: 1,
//         firstName: 'John',
//         isActive: true
//     },
//     {
//         id: 2,
//         firstName: 'Mike',
//         isActive: false
//     }
// ]

function normalizeUsers (users) {
    return _.map(users, (user) => {
        return {
            id: user.id,
            firstName: user.first_name,
            isActive: user.status === 'active'
        }
    })
}

console.log('normalizeUsers', normalizeUsers(users));
