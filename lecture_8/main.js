// // 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
// let str = 'javascript'
// console.log(str[str.length - 1]);
// // console.log(str.at(-1));

// // 2. let text = "Hello world" ამოჭერი მხოლოდ world
// let text = "Hello world"
// console.log(text.slice(6));

// // 3. let name = "gio”  გადაიყვანე დიდ ასოებში 
// let name1 = 'gio'
// console.log(name1.toUpperCase());

// // 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// let first = "Hello"
// let second = "WORLD"
// console.log(first.concat(" ", second));

// // 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით
// let str2  = "   I love js js js   "
// console.log(str2.trim().replaceAll('js', 'javascript'));


// let nums = [1, 2, 3, 4, 5]
// const sum = nums.reduce((a, b) => a + b, 0)
// console.log(sum);

// let arr = [1,2,2,3,4,4,5]
// const uniques = [... new Set(arr)]
// console.log(uniques);


// let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]
// const nika = students.filter(student => student.name === 'Nika')
// console.log(nika);

// let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]

// const sorted = people.sort((a, b) => a.age - b.age)
// console.log(sorted);


// // 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
// let sentence = "apple orange apple banana apple orange kiwi"
// let fruits = sentence.split(" ")
// const counted = fruits.reduce((a, b) => {
//     if(b === 'apple') a.apple++
//     else if(b === 'orange') a.orange++
//     else if(b === 'banana') a.banana++
//     else if(b === 'kiwi') a.kiwi++
//     return a
// }, {apple: 0, orange: 0, banana: 0, kiwi: 0})
// console.log(counted);


// // 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი
// let nested = [[1,[12,46],4,5,6,7]]
// console.log(nested.flat(Infinity));

// // 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]
// let numbers = [1,20,90,100,3,3]
// const ones = numbers.map(num => num = 1)
// console.log(ones);

// // შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად
// let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// const words = text.split(" ")
// const s = words.reduce((a, b) => {
//     if(a[b]) {
//         a[b] += 1
//     } else {
//         a[b] = 1
//     }
//     return a
// }, {})

// console.log(s);
// let maxW = 0
// let wordM = ''
// for(let word in s) {
//     console.log(s[word]);
//     if(maxW < s[word]) {
//         maxW = s[word]
//         wordM = word
//     }
    
// }
// console.log(`${wordM} ${maxW}`);


// let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// console.log(Object.keys(person));
// console.log(Object.values(person));

// let car = {brand: "BMW", model: "X5"} 
// car.year = 200
// console.log(car);


// let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// const filtered = products.find(p => p.price === 40)
// console.log(filtered);

// // შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება
// const calculator = {
//     a: 0,
//     sum(num) {
//         this.a + num
//         return this
//     },
    
//     sub(num) {
//         this.a - num
//         return this
//     },

//     mult(num) {
//         this.a * num
//         return this
//     },

//     div(num) {
//         this.a / num
//         return this
//     },

// }

// let sum = calculator.sum(3).sub(4)
// console.log(sum);

// let api =  "https://jsonplaceholder.typicode.com/albums"
// დაფეჩე ეს ეიპიაი და ამოიღე ყველა title
// async function func() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/albums")
//     const res = await data.json()
//     const titles = res.map(a => a.title)
//     console.log(titles);
    
// }

// func()
// // 2)გააკეთე თაიმერი რომელიც დაითვლის უკუთვლით და რომ მივა 0 ზე გაჩერდება
// function timer(n) {
//     const interval = setInterval(() => {
//         console.log(n)
//         n--
//         if(n === 0) clearInterval(interval)
//     }, 1000)
   
// }

// timer(4)


// function countingLetters(str, k) {
//     let count = 0
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === k) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countingLetters('fdds', 'd'))

// function palindrome(str) {
//     let reversed = str.split('').reverse().join("")
//     return reversed === str
// }

// console.log(palindrome('abba'));

// function twoArr(arr1, arr2) {
//     return [...new Set(arr1)].concat([...new Set(arr2)]).reduce((a, b) => a + b, 0)
// }

// console.log(twoArr([2,3,3], [4,4,5]));

// function factorial(n) {
//     if(n === 0 || n === 1) return 1
//     return n * factorial(n - 1)
// }
// console.log(factorial(5));


// function twoSum(arr, sum) {
//     let nums = []
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === sum)
//                 nums.push(i, j)
//         }
//     }   
//     return nums
// }

// console.log(twoSum( [1,2,3,4,5,6,-7,-8], 9));
