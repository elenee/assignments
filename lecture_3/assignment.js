// 1) 
const inputArr = [1,2,3]
const outputArr = inputArr.map(num => num * 3)
console.log(outputArr);

// 2)
const filtered = inputArr.filter(num => num % 3 === 0)
console.log(filtered);

// 3)
const numbers = [-2, 5, 9, -8, -4]
const sumOfPositives = numbers.filter(num => num > 0).reduce((a, b) => a + b, 0)
console.log(sumOfPositives);

// 4)
let namesArr = ["giorgi","nika","mariami"]
const str = namesArr.map(str => str.slice(0, -1))
console.log(str);

// 5)
const nums = [6, 8, 5, 7, 3, 4];
const doubled = nums.map(num => num * 2).filter(num => num % 3 === 0)
console.log(doubled);

// 6)
let arr = [
    {
        category:"pizza",
        price:20
    },
    {
        category:"pizza",
        price:20
    },
    {
        category:"sushi",
        price:30
    },
    {
        category:"sushi",
        price:30
    },
]

let grouped = arr.reduce((a, b) => {
    let price = b.price;
    if(!a[price]) {
        a[price] = [];
    }
    a[price].push(b)
    return a
}, {})

console.log(grouped);


// 7) 
let numsArr = [1,-1,-2,-10,111,3,2,5]
const sorted = numsArr.sort((a, b) => a - b)
console.log(sorted);

// 8)
const filtered1 = numsArr.map(num => num * 2).filter(num => num > 5)
console.log(filtered1);

// 9)
let array = [1,1,1,1,2,2,3,3,3]
let unique = [...new Set(array)]
console.log(unique);

// 10)
let arr1 = [-1,20,90,4,5,111]
const sumllestTwo = arr1.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0)
console.log(sumllestTwo);



