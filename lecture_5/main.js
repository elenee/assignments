// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
function timer(sec) {
    let i = 10;
    let interval = setInterval(() => {
        console.log(i);
        i--;
        if(i < sec) {
            clearInterval(interval);
        }
    }, 1000)
}

// timer(5);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
function randomNum(n) {
    let interval = setInterval(() => {
        let random = Math.floor(Math.random() * 10);
        console.log(random);
        if(n === random) {
            clearInterval(interval);
        }
    }, 1000);
}

// randomNum(5);

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
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

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
async function fetchAPI(API) {
    const res = await fetch(API);
    let data = await res.json();
    let slicedData = data.slice(0, -5);
    console.log(slicedData);
}

// fetchAPI("https://jsonplaceholder.typicode.com/users");


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
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

