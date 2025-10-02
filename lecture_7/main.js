// class DefaultClass {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     getInfo() {
//         console.log(`${this.firstName}, ${this.lastName}, ${this.age}`);
//     }
// }

// let p1 = new DefaultClass('a', 'b', 2)
// let p2 = new DefaultClass('c', 'd', 3)

// p1.getInfo()
// p2.getInfo()

// class Animal {
//     // #name
//     #age
//     // #color
//     constructor(name, age, color) {
//         this.name = name
//         this.#age = age
//         this.color = color
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, color, legs) {
//         super(name, age, color)
//         this.legs = legs
//     }    

//     walk() {
//         console.log('walking')
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, color) {
//         super(name, age, color)
//     } 

//     swim() {
//         console.log('Swimming');
//     }
// }


// let dog = new Dog('A', 2, 'white', 4)
// let fish = new Fish('Dory', 3, 'blue')

// console.log(dog);
// console.log(fish);

// class Calculator {
//     constructor(initialValue) {
//         this.initialValue = initialValue
//     }

//     add(num) {
//         this.initialValue += num
//         return this
//     }

//     sub(num) {
//         this.initialValue -= num
//         return this
//     }

//     mult(num) {
//         this.initialValue *= num
//         return this
//     }

//     div(num) {
//         this.initialValue /= num
//         return this
//     }

//     getRes() {
//         console.log(this.initialValue);
//     }
// }

// let calc = new Calculator(20)
// calc.add(5).sub(2).div(2)
// calc.getRes()



// 1.შექმენი Rectangle (მართკუთხედი) კლასი, რომელიც იღებს სიგანეს და სიმაღლეს, და დაამატე შემდეგი მეთოდები: getArea(), getPerimeter(), isSquare().
// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     getArea() {
//         return this.width * this.height
        
//     }

//     getPerimeter() {
//         return (this.width + this.height) * 2
//     } 

//     isSquare() {
//         return this.width === this.height
//     }

// }

// let rectangle1 = new Rectangle(3, 4)
// console.log(rectangle1.getArea());
// console.log(rectangle1.getPerimeter());
// console.log(rectangle1.isSquare());


// // 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.
// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2
//     }
// }

// let circle1 = new Circle(2)
// console.log(circle1.getArea());

// // 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.
// class Car {
//     constructor(make, model, year) {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
// }

// class ElectricCar extends Car {
//     constructor(make, model, year, batteryLevel) {
//         super(make, model, year)
//         this.batteryLevel = batteryLevel
//     }
// }



// 4.შექმენი Library (ბიბლიოთეკა) კლასი, რომელიც ინახავს წიგნების სიას (array-ში). დაამატე მეთოდები: addBook(), removeBook(), listBooks().
// class Library {
//     constructor() {
//         this.books = []
//     }

//     addBook(title) {
//         // this.books.push(title)
//         // console.log(`${title} added to the library`);
//         let lastId = this.books[this.books.length - 1]?.id || 0
//         let newObj = {
//             id: lastId + 1,
//             title
//         }
//         this.books.push(newObj);
//         console.log(`${title} added to the library`);
//     } 
    
//     removeBook(title) {
//         const index = this.books.findIndex(b => b.title === title)
//         if(index !== -1) {
//             this.books.splice(index, 1)[0]
//             console.log(`${title} removed`);
//         } else {
//             console.log('no such book');
            
//         }
//         // this.books = this.books.filter(b => b.title !== title)
//     } 

//     listBooks() {
//         if(this.books.length === 0) {
//             console.log('library is wmpty');
//         } else {
//             this.books.forEach(book => {
//                 console.log(`${book.id}: ${book.title}`);
//             })
//         }
//     }

// }

// let b1 = new Library()
// b1.addBook('b1')
// b1.addBook('b2')
// b1.listBooks()

// 5.შექმენი BankAccount (საბანკო ანგარიში) კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney(), transactionHistory(), getBalance().
// class BankAccount {
//     constructor(balance = 0) {
//         this.balance = balance
//         this.transactionHistory = []
//     }

//     deposit(amount) {
//         this.balance += amount
//         console.log(`Balance: ${this.balance}`);
//         this.transactionHistory.push({type: 'Deposit', amount: amount, date: new Date()})
//     } 

//     withdraw(amount) {
//         if(amount <= this.balance) {
//             this.balance -= amount
//             console.log(this.balance);
//             this.transactionHistory.push({type: 'withdraw', amount: amount})
//         } else {
//             console.log('not enough on the balance');
//         }
//     } 

//     transferMoney(amount, toAcc) {
//         if(amount > this.balance) {
//             console.log('Not enought on the balance');
//         } else {
//             this.balance -= amount
//             toAcc.balance += amount
//             this.transactionHistory.push({type: 'transfer out', amount: amount, to:toAcc, date: Date()})
//             toAcc.transactionHistory.push({type: 'transfer in', amount: amount, from: this, date: new Date()})
//         }
//     } 

//     getTransactionHistory() {
//         if(this.transactionHistory.length === 0) {
//             console.log('No transctions');
            
//         } else {
//             this.transactionHistory.forEach(t => console.log(`${t.type}, ${t.amount}, ${t.date.toLocaleString()}`))
//         }
//     }

//     getBalance() {
//         console.log(`balance: ${this.balance}`);
//     }
// }

// let acc1 = new BankAccount()
// let acc2 = new BankAccount()
// acc1.deposit(20)
// acc1.withdraw(30)
// acc1.transferMoney(10, acc2)
// acc1.getTransactionHistory()


// 6.შექმენი Employee (თანამშრომელი) კლასი, რომელსაც ექნება მეთოდი calculateSalary(), რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით.
// class Employee {
//     constructor(name, workHour, hourRate) {
//         this.name = name
//         this.workHour = workHour
//         this.hourRate = hourRate
//     }

//     calculateSalary() {
//         console.log(this.hourRate * this.workHour);
//     }
// }


// 7.შექმენი ShoppingCart (საყიდლების კალათა) კლასი, რომელიც ინახავს ნივთების სიას. დაამატე მეთოდები: addItem(), deleteItem(), updateItem().
class ShoppingCart {
    constructor() {
        this.items = []
    }
    
    addItem(item) {
        let lastId = this.items[this.items.length - 1]?.id || 0
        let newItem = {
            id: lastId + 1,
            item
        }
        this.items.push(newItem)
        console.log(`${item} added to the cart`);
        
    }
    
    deleteItem(item) {
        this.items = this.items.filter(it => it.id !== item)
        console.log(`${item} removed`);
        
    } 

    updateItem(id, newItem) {
        let found = this.items.find(el => el.id === id)
        if(found) {
            console.log(`${found.item} updated to ${newItem}`);
            found.item = newItem
        } else {
            console.log('item not found');
            
        }

    }

}

let cart = new ShoppingCart()
cart.addItem('item1')
// cart.deleteItem('item1')
cart.updateItem(0, 'item2')