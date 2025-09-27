// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით
// let promise1 = new Promise((res, rej) => {
//     res('resolved');
// })

// let promise2 = new Promise((res, rej) => {
//     rej('rejected');
// });

// promise1.then(res => console.log(res)).catch(error => console.log(error))
// promise2.then(res => console.log(res)).catch(error => console.log(error))

// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს  let api1 = https://jsonplaceholder.typicode.com/users let api2 = https://jsonplaceholder.typicode.com/posts
async function MyPromise1() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users")
        let res = await data.json();
        return res[0];
    } catch (error) {
        console.log(error);
    }
}

async function MyPromise2() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let res = await data.json();
        return res[0];
    } catch (error) {
        console.log(error);
    }
}

// Promise.race([MyPromise1(), MyPromise2()]).then(res => console.log(res)).catch(error => console.log(error))

// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any
// Promise.all([MyPromise1(), MyPromise2()]).then(res => console.log(res)).catch(error => console.log(error))
// Promise.allSettled([MyPromise1(), MyPromise2()]).then(res => console.log(res)).catch(error => console.log(error))
// Promise.any([MyPromise1(), MyPromise2()]).then(res => console.log(res)).catch(error => console.log(error))

// 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება
// let promise1 = new Promise((resolve, reject) => {
//     resolve('resolved');
// })

// let promise2 = new Promise((resolve, reject) => {
//     resolve('resolved');
// });

// let promise3 = new Promise((resolve, reject) => {
//     reject('rejected');
// });

// let promise4 = new Promise((resolve, reject) => {
//     reject('rejected');
// });

// Promise.allSettled([promise1, promise2, promise3, promise4]).then(res => {
//     let filtered = res.filter(el => el.status ==='fulfilled');
//     console.log(filtered);
// });

// 5. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარეჯექთდება
// Promise.allSettled([promise1, promise2, promise3, promise4]).then(res => {
//     let filtered = res.filter(el => el.status !=='fulfilled');
//     console.log(filtered);
// });

//  6. 
let promise = new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve('resolved');
    })
});

function block(){
    for(let i = 1;i <10000000000;i++){}
}

promise.then(() => {
    block()
})

console.log("one")
block()
console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

