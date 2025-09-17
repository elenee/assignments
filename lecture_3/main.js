// let str = "help"
// let answer = ""
// str.split("").forEach(char => {
//     answer = char + answer;
//     console.log(answer);
// })

// const obj = [
//     { 
//         name: "Apple", 
//         category: "Fruit" 
//     },
//     { 
//         name: "Orange", 
//         category: "Fruit"
//      },
//     { 
//         name: "Carrot", 
//         category: "Vegetable" 
//     }
// ]

// let grouped = obj.reduce((acc, obj) => {
//     let category = obj.category;
//     if(!acc[category]) {
//          acc[category] = [];
//     }
//     acc[category].push(obj);
//     return acc;
// } , {})

// console.log(grouped);

// 1.გააორმაგე თითოეული ელემენტი მასივში
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2)
console.log(doubled);
// 2.ამოიღე ლუწი რიცხვები მასივიდან
const even = arr.filter(num => num % 2 === 0)
console.log(even);

// 3.მოცემული სტრინგების მასივიდან ამოიღე სტრინგები, რომლებსაც აქვთ 5-ზე მეტი სიმბოლო და გააერთიანე დარჩენილი სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით
const sentneces = ["hello", "my", "nameee", "heeelp", "Elene"]
const filtered = sentneces.filter(str => str.length > 5)
const joined = filtered.join("#")
console.log(filtered);
console.log(joined);

// 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
const filter = arr.map(num => num * 2).filter(num => num % 3 === 0);
console.log(filter);

// 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი
const numbers = [-3,5,6,2,-9,4,-7,3]
const sumOfPositives = numbers.filter(num => num > 0).reduce((a, b) => a + b, 0)
// 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
const removed = sentneces.map(str => str.slice(0, -1))
console.log(removed);

// 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირე დადებით რიცხვზე ჯამს
function sum(arr) {
    const smallestNums = arr.filter(num => num > 0).sort((a, b) => a - b).slice(0, 2);
    console.log(smallestNums);
    sum = smallestNums.reduce((a, b) => a + b, 0)
    return sum
}

console.log(sum([9, -5, 0, 4, -2, 6, 2]))
// * მაგ: [19, 5, 42, 2, 77] → 7