// 1)
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]
let sorted =arr.flat(Infinity).sort((a, b) => a-b)
let uniques = []
for(let i = 0; i < sorted.length; i++) {
    if(!uniques.includes(sorted[i])) {
        uniques.push(sorted[i])
    }
}
console.log(uniques);


// 2)
let products = [
  { name:"Phone", price:1200, rating:4.5 },
  { name:"Laptop", price:2500, rating:4.8 },
  { name:"Book", price:30, rating:4.9 },
  { name:"TV", price:800, rating:4.0 }
]

let highestRanking = products.filter(p => p.price < 1000).sort((a, b) => b.rating - a.rating)[0]
console.log(highestRanking);


// 3)
let sentence = "dog cat dog bird cat dog fish bird"
let words = sentence.split(' ')
let counted = words.reduce((a, b) => {
    if(a[b]) {
        a[b]++
    } else {
        a[b] = 1
    }
    return a
}, {})
const maxCount = Object.entries(counted).sort((a, b) => b - a)[0]
console.log(maxCount);


// ForLoop tasks

// 1)
function func(str, k) {
    let n = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === k) {
            n++
        }
    }
    return n
}

console.log(func('elee', 'e'));


// 2)
function palindrome(str) {
    let reversed = str.split('').reverse().join("")
    return reversed === str
}

console.log(palindrome('abba'));

// 3)
function sum(arr1, arr2) {
    let newArr = [...new Set(arr1.concat(arr2))]
    let sum = newArr.reduce((a, b) => a + b, 0)
    return sum
}
console.log(sum([1,2,3], [4,5,5,6,6,6,6]));

//  4)
function factorial(n) {
    if(n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5));

// 5)
function twoSum(arr, sum) {
    let nums = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum)
                nums.push(i, j)
        }
    }   
    return nums
}

console.log(twoSum( [1,2,3,4,5,6,-7,-8], -15));