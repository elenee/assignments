// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი
let radiusObj = {
    getArea : function(r){
      return `{radius: ${r}, area: ${Math.PI * r * r}}`;
    // let pi = 3.14;
    // return `{radius: ${r}, area: ${pi * r * r}}`;
    }
}
console.log(radiusObj.getArea(6))

// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები
const people = [
{ name: "Giorgi", age: 21 },
{ name: "Nika", age: 19 },
{ name: "Mariam", age: 25 },
{ name: "Lika", age: 30 },
];
// for(let person in people) {
//     console.log(people[person]["name"])
// }
people.forEach(people => console.log(people.name));

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი
const products = [
{ title: "Mouse", price: 15 },
{ title: "Keyboard", price: 45 },
{ title: "USB Cable", price: 7 },
{ title: "Headphones", price: 29.9 },
{ title: "Webcam", price: 52 },
];

const filtered = products.filter(product => product.price > 20).reduce((a, b) => a + b.price, 0);;
console.log(filtered);


// 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით
const movies = [
{ title: "Inception", year: 2010 },
{ title: "Memento", year: 2000 },
{ title: "Tenet", year: 2020 },
{ title: "Interstellar", year: 2014 },
];
// sorted by title
const sortedBytitle = movies.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedBytitle);

// other way to sort by title
const sortedBytitle2 = movies.sort((a, b) => {
    if(a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    } else {
        return 0
    }
})
console.log(sortedBytitle2);

const sorted = movies.sort((a, b) => b.year - a.year);
console.log(sorted)

// 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
const laptops = [
{ model: "Dell XPS 13", price: 1800 },
{ model: "MacBook Pro 14", price: 2499 },
{ model: "Lenovo ThinkPad X1", price: 2100 },
{ model: "Asus Zephyrus G14", price: 1999 },
];

const expensiveLaptop = laptops.sort((a, b) => b.price - a.price)[0]
console.log(expensiveLaptop);

// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getDescription: function() {
        return `${this.brand} ${this.model} ${this.year}`
    },
}

console.log(car.getDescription());