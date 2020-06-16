// var native = [1, 2].forEach((item) => {
//     console.log(item);
// })

// var lodash = _.each([1, 2], (item) => {
//     console.log(item);
// })

// console.log(native, lodash);

var items = {
    1: {
        name: 'Milk'
    },
    2: {
        name: 'Bread'
    }
}

// console.log(items.forEach);

var arr = [];

_.each(items, (item, index)=> {
    console.log(item, index);
    arr.push(item)
})

console.log(arr);
