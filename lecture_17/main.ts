interface IUser {
    name: string,
    age: number
}

function createUser(user: IUser): string {
    return `User ${user.name} is ${user.age} years old`
}

const user: IUser = {name: 'Nika', age: 22}
console.log(createUser(user))

interface IProduct {
    name: string,
    price: number
}

function main(product: IProduct) {
    return product.price > 100 ? "Discount available!" : "Discount isn't available!";
}

const product: IProduct = { name: 'product', price: 124 }
console.log(main(product));


interface IHero {
    name: string,
    age: number
}

interface ISuperHero extends IHero {
    power: string,
    level?: string
}

function levelUp(hero: ISuperHero): any {
    if(hero.age > 30) hero.level = 'Pro'
    else hero.level = 'Newbie'
    return `${hero.name} is now level: ${hero.level}`
}

const hero1: ISuperHero = {
  name: "Batman",
  age: 35,
  power: "Stealth",
};

console.log(levelUp(hero1));


const arr = [1, 2, 3, 4]

function gen<T>(arr:T[]) {
    return arr[0]
}

console.log(gen(arr));
