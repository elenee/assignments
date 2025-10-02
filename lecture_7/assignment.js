// 1)
class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    getPerimeter() {
        console.log(`perimeter: ${this.a + this.b + this.c}`);
    }

    getArea() {
        let s = (this.a + this.b + this.c) / 2
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
        console.log(`Area: ${area}`);
    }

    isRightTriangle() {
        let sides = [this.a, this.b, this.c].sort((a, b) => a - b)
        let [x, y, z] = sides
        if(x **2 + y**2 === z**2) {
            return true
        } else {
            return false
        }
    }
}

let triangle1 = new Triangle(6, 6, 10)
triangle1.getPerimeter()
triangle1.getArea()
console.log(triangle1.isRightTriangle());

// 2)
class Smartphone{
    constructor(brand, model, releaseYear) {
        this.brand = brand
        this.model = model
        this.releaseYear = releaseYear
    }

}

class GamingPhone extends Smartphone {
    constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
        super(brand, model, releaseYear) 
        this.gpuScore = gpuScore
        this.batteryCapacity = batteryCapacity
    }

     performanceIndex() {
        return this.gpuScore * this.batteryCapacity
     }
}

// 3)
class CryptoWallet {
    constructor() {
        this.balance = 0
        this.transactionHistory = []
    }

    deposit(amount) {
        this.balance += amount   
        this.transactionHistory.push({type: 'depost', amount: amount, date: new Date()})
        console.log(`${amount} deposited`);
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log('not enough on balance');
        } else {
            this.balance -= amount
            this.transactionHistory.push({type: 'withdraw', amount: amount, date: new Date()})
            console.log(`${amount} withdrawed`);
        }
    }

    transfer(amount, toAcc) {
        if(amount > this.balance) {
            console.log('not enough on balance');
        } else {
            this.balance -= amount
            toAcc.balance += amount
            this.transactionHistory.push({type: 'transfer out', amount: amount, to:toAcc, date: new Date()})
            toAcc.transactionHistory.push({type: 'transfer in', amount: amount, from: this, date: new Date()})
        }
    }

    getHistory(){
        if(this.transactionHistory.length === 0) {
            console.log('no transactions yet');
            
        } else {
            this.transactionHistory.forEach(t => console.log(`${t.type}. ${t.amount}. ${t.date}`))
        }
    }
}

console.log('\n');

let acc1 = new CryptoWallet()
let acc2 = new CryptoWallet()
acc1.deposit(100)
acc1.withdraw(200)
acc1.transfer(20, acc2)
acc1.getHistory()
acc2.getHistory()

// 4)
class Wishlist{
    constructor() {
        this.items = []
    }

    addItem(item) {
        const lastIndex = this.items[this.items.length - 1]?.id || 0
        let newitem = {
            id: lastIndex + 1,
            item
        }
        this.items.push(newitem)
        console.log(`${item} added to the wishlist`);
        
    }

    deleteItem(id) {
        this.items = this.items.filter(el => el.id !== id)
        console.log(`item with ${id} removed`);
        
    }
    
    updateItem(id, newItem) {
        let foundItem = this.items.find(el => el.id === id) 
        if(foundItem) {
            foundItem.item = newItem
            console.log(`${foundItem.item} updated to ${newItem}`);
        } else {
            console.log('not found');
            
        }
    }

}
let wishlist = new Wishlist()
wishlist.addItem('money')
wishlist.updateItem(1, 'lots of money')

// 5)
class Freelancer{
    constructor(hourRate, hoursWorked, bonusRate) {
        this.hourRate = hourRate
        this.hoursWorked = hoursWorked
        this.bonusRate = bonusRate
    }

    calculateEarnings() {
        let pay = this.hourRate * this.hoursWorked
        let bonus = 0
        if(this.hoursWorked > 160) {
            bonus = (this.hoursWorked - 160) * this.bonusRate
        }
        return pay + bonus
    }
}

let freelancer = new Freelancer(20, 180, 7)
console.log(freelancer.calculateEarnings());
