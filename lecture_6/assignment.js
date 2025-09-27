// 1) 
// function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// let promise =  new Promise(resolve => {
//     setTimeout(() => resolve('resolved'))
// }).then(() => block())

// console.log("one")
// block()
// console.log("two")

// 2)
let promise1 = new Promise((resolve, reject) => {
    resolve('resolved');
})

let promise2 = new Promise((resolve, reject) => {
    reject('rejected');
});

promise1.then(resolve => console.log(resolve)).catch(err => console.log(err));
promise2.then(resolve => console.log(resolve)).catch(err => console.log(err));
Promise.allSettled([promise1, promise2]).then(resolve =>console.log(resolve)).catch(error => console.log(error))

// 3)
let myPromise1 = new Promise((resolve, reject) => {
    resolve('resolved');
})

let myPromise2 = new Promise((resolve, reject) => {
    reject('rejected');
});

let myPromise3 = new Promise((resolve, reject) => {
    resolve('resolveed');
});

let myPromise4 = new Promise((resolve, reject) => {
    reject('rejected');
});

Promise.race([myPromise1, myPromise2, myPromise3, myPromise4]).then(res => console.log(res)).catch(err => console.log(err))

// 4)
Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4]).then(res => {
    const result = res.reduce((a, b) => {
        if(b.status == 'fulfilled') a.fulfilled++;
        if(b.status == 'rejected') a.rejected++;
        return a;
    }, {fulfilled: 0, rejected: 0});
    console.log(result);
})

// 5) 
let myPromise5 = new Promise((resolve, reject) => {
    resolve('resolved');
})

let myPromise6 = new Promise((resolve, reject) => {
    reject('rejected');
});

let myPromise7 = new Promise((resolve, reject) => {
    resolve('resolveed');
});

let myPromise8 = new Promise((resolve, reject) => {
    reject('rejected');
});

let myPromise9 = new Promise((resolve, reject) => {
    reject('rejected');
});

Promise.allSettled([myPromise5, myPromise6, myPromise7, myPromise8, myPromise9]).then(res => {
    let filtered = res.filter(el => el.status == 'rejected');
    console.log(filtered);
    
})

// 6)
async function func1(params) {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        let res = await data.json();
        return res[0];
    } catch (error) {
        console.log(error);
    }
}

async function func2(params) {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts');
        let res = await data.json();
        return res[0];
    } catch (error) {
        console.log(error);
    }
}

Promise.all([func1(), func2()]).then(resolve => console.log(resolve)).catch(err => console.log(err))