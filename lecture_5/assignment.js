// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
function counter(sec) {
    let count = sec;
    let interval = setInterval(() => {
        console.log(count);
        count--;
        if(count < 0) {
            clearInterval(interval)
        }
    }, 1000);
}

// counter(10);

// 2. 
function rand(n) {
    let interval = setInterval(() => {
        let random = Math.floor(Math.random() * 10);
        console.log(random);
        if(n === random) {
            clearInterval(interval);
        }
    }, 1000);
}
// rand(2);

// 3.
function func(n, callback) {
    if(n > 27) {
        callback();
    } else {
        console.log(`${n} is less than 27`);
    }
}

function callback() {
    console.log('n is greater than 27');
}
func(30, callback)

// 4.
async function fetchAPI(API) {
    try {
        const res = await fetch(API);
        let data = await res.json();
        let slicedData = data.slice(0, 4);
        console.log(slicedData);
    } catch (error) {
        console.log(error);
    }
}
// fetchAPI("https://jsonplaceholder.typicode.com/users");

function fetchAPIthan(API) {
    fetch(API).then(res => res.json()).then(data => console.log(data.slice(0, 4))).catch(error => console.log(error));
}
fetchAPIthan("https://jsonplaceholder.typicode.com/users");


// 5) 
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 }
];

const grouped = people.reduce((a, b) => {
    let age = b.age;
    if(age > 10) a.above10++;
    if(age < 20) a.below20++;
    return a;
}, {above10: 0, below20: 0});

console.log(grouped);


// 6.
function func(a, b, callback) {
    if(a > b) {
        callback();
    } else {
        console.log(`${a} is less than or equal to ${b}`);
    }
}

function callback() {
    console.log('greater');
}
func(2, 4, callback)

// 7.
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 }
];

const prices = products.reduce((a, b) => {
    let price = b.price;
    if(price < 20) a.cheap++;
    else a.expensive++;
    return a
}, {cheap: 0, expensive: 0})

console.log(prices);
