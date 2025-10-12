// 1)
function even(arr) {
    let even = arr.filter(num => num % 2 == 0);
    let sum = even.reduce((a, b) => a + b, 0)
    return sum / even.length
}

console.log(even([1,2,3,4,5,6]));

// 2)
let str = "I love JavaScript"
function countingWords(str) {
    return str.split(" ").length;
}
console.log(countingWords(str));

// 3)
function primeNum(num) {
    let k = 0
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) k++;
    }
    return k < 3 ? true : false
}
console.log(primeNum(3));

// 4)
let words = ["dog", "elephant", "cat", "hippopotamus" ] 
function longestWord(words) {
    let longestWord = words[0]
    for(let i = 0; i < words.length; i++) {
        if(longestWord.length < words[i].length) {
            longestWord = words[i]
        }
    }
    return longestWord
}
console.log(longestWord(words));


// 5)
let arr = [3, 5, 3, 2, 5, 5, 3, 5]
let grouped = arr.reduce((a, b) => {
    if(a[b]) {
        a[b]++
    }
    else {
        a[b] = 1
    }
    return a
},{}) 
let maxCount = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0]
console.log(maxCount);

// 6)
let nums = [1, 2, 3, 4, 5, 6, 7, 8] 
function evenOdd(arr) {
    let odd = 0
    let even = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) even++
        else odd++
    }
    return {odd, even}

}

console.log(evenOdd(nums));

// 7)
let numbers = [10, 2, 33, 5, 7] 
const smallest = numbers.reduce((min, a) => Math.min(min, a))
console.log(smallest);
