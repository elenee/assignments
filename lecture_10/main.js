// console.log(process.pid)
// console.log(process.version)
// console.log(process.platform)
// console.log(process.cwd())
// // console.log(process.env)
// console.log(process.argv)
// // console.log(process.exit())


const fs = require("fs/promises")

async function main() {
    fs.writeFile("first.txt", "hello")
    fs.writeFile("second.txt", " world")
    let readText1 = await fs.readFile("first.txt", "utf-8")
    let readText2 = await fs.readFile("second.txt", "utf-8")
    let combined = readText1.concat(readText2)
    console.log(readText1);
    console.log(readText2);
    fs.writeFile("third.txt", combined)    
}

main()

let user1 = [
    {
        id: 1, 
        name: 'a',
        age: 20
    },
    {
        id: 1, 
        name: 'b',
        age: 21
    },
]

let user2 = [
    {
        id: 1, 
        name: 'a',
        age: 20
    },
    {
        id: 1, 
        name: 'b',
        age: 21
    },
]

// async function func() {
//     await fs.writeFile('data.json', JSON.stringify(user1))
//     let readJSON = await fs.readFile("data.json", "utf-8")
//     let parsed = JSON.parse(readJSON)
//     console.log(parsed);
    
// }

// func()


async function main1() {
    let both = [...user1,...user2]
    fs.writeFile("data.json", JSON.stringify(both))
    let read = await fs.readFile("data.json", "utf-8")
    let parsed = JSON.parse(read)
    console.log(parsed);
    
}

main1()


// წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
// async function readNums() {
//     let nums = [1,2,3,4,5]
//     fs.writeFile("first.txt", nums)
//     let readNum = await fs.readFile("first.txt", "utf-8")
//     // let numsToArr = JSON.parse(readNum)
//     let sum = readNum.reduce((a, b) => a + b, 0)
//     console.log(sum);
    
// }

// readNums()

// ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
async function readText() {
    fs.writeFile("first.txt", "hello")
    let text = await fs.readFile("first.txt", "utf-8")
    let str = text.split("").reverse().join("")
    fs.writeFile("second.txt", str)
}
readText()

// შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
const users = [
    {
        name: 'a',
        age: 1,
        email: 'b'
    },
    {
        name: 'a',
        age: 20,
        email: 'b'
    },
]

// async function userToJson(params) {
//     fs.writeFile('data.json', JSON.stringify(users))
//     let readJSON = await fs.readFile("data.json", "utf-8")
//     let parsed = JSON.parse(readJSON)
//     console.log(parsed);
// }

// userToJson()
// წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში

// ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
// async function func() {
//     fs.writeFile("first.txt", "hello")
//     let text = await fs.readFile("first.txt", 'utf-8')
//     let words = text.split(" ").length;
//     console.log(words);
    
// }

// func()

// წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
async function filtered() {
    fs.writeFile('data.json', JSON.stringify(users))
    let readJSON = await fs.readFile("data.json", "utf-8")
    let parsed = JSON.parse(readJSON)
    let filtered = parsed.filter(a => a.age > 18)
    console.log(filtered);
}

filtered()