//  1)
 const laptops = [
 { model: "Dell XPS 13", price: 1800 },
 { model: "MacBook Pro 14", price: 2499 },
 { model: "Lenovo ThinkPad X1", price: 2100 },
 { model: "Asus Zephyrus G14", price: 1999 },
];

const mostExpensive = laptops.sort((a, b) => b.price - a.price)[0];
console.log(mostExpensive);

// 2)
const obj = {
    width: 3,
    height: 4,
    getArea: function() {
        console.log(this.width * this.height);
    }
}
obj.getArea();

// 3)
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false }
];

const passed = students.filter(student => student.passed === true).map(student => student.name);
console.log(passed);

// 4)
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 }
];

const filtered = products.filter(p => p.price < 10).map(p => p.title);
console.log(filtered);

// 5)
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 }
];

const sorted = movies.sort((a, b) => a.rating - b.rating);
console.log(sorted);

// 6)
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];

const cheapest = phones.sort((a, b) => a.price - b.price)[0].model;
console.log(cheapest);

// 7)
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];

const filter = books.filter(book => book.pages > 300);
console.log(filter);

// 8)
const phones1 = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];

const sortedPhones = phones1.sort((a, b) => a.price - b.price);
const sum = phones1.reduce((sum, b) => sum + b.price, 0);
console.log(sortedPhones, sum);

