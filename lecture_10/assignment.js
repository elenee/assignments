const fs = require("fs/promises")

// 1)
async function readNums() {
    const arr = [1,2,3,4,5]
    await fs.writeFile("first.txt", JSON.stringify(arr))
    const nums = await fs.readFile("first.txt", "utf-8")
    let parsed = JSON.parse(nums)
    const sum = parsed.reduce((a, b) => a + b, 0)
    console.log(sum);
}
// readNums()

// 2)
async function readText() {
    await fs.writeFile("first.txt", "hello")
    let text = await fs.readFile("first.txt", "utf-8")
    let str = text.split("").reverse().join("")
    await fs.writeFile("second.txt", str)
}
// readText()

// 3)
const users1 = [
    {
        name: 'a',
        age: 17,
        email: 'a@gmail.com'
    },
    {
        name: 'b',
        age: 20,
        email: 'b@gmail.com'
    },
]
async function usersFunc() {
    await fs.writeFile('data.json', JSON.stringify(users1))
    let readUsers = JSON.parse(await fs.readFile('data.json', 'utf-8'))
    console.log(readUsers);
}

usersFunc()

// 4)
async function main() {
    await fs.writeFile("first.txt", "hello")
    await fs.writeFile("second.txt", "world")
    let readText1 = await fs.readFile("first.txt", "utf-8")
    let readText2 = await fs.readFile("second.txt", "utf-8")
    let combined = readText1 + " " + readText2
    console.log(readText1);
    console.log(readText2);
    await fs.writeFile("third.txt", combined)    
}

// main()

// 5)
async function func() {
    await fs.writeFile("first.txt", "hello world")
    let text = await fs.readFile("first.txt", 'utf-8')
    let words = text.split(" ").length;
    console.log(words); 
}

// func()

// 6)
async function filtered() {
    await fs.writeFile('data.json', JSON.stringify(users1))
    let readJSON = await fs.readFile("data.json", "utf-8")
    let parsed = JSON.parse(readJSON)
    let filtered = parsed.filter(a => a.age > 18)
    console.log(filtered);
}

// filtered()

// 7)
const students = [
    {
        name: 'a',
        score: 51,
        passed: true
    },
    {
        name: 'b',
        score: 49,
        passed: false
    }
]
async function studentsFunc() {
    await fs.writeFile('students.json', JSON.stringify(students))
    let stu = JSON.parse(await fs.readFile('students.json', 'utf-8'))
    const filtered = stu.filter(s => s.score > 50)
    await fs.writeFile('passed.json', JSON.stringify(filtered))
    console.log(filtered);

}
studentsFunc()

// 8)
const users2 = [
  { "name": "Gio", "email": "gio@gmail.com" },
  { "name": "Nika", "email": "nikaexample.com" },
  { "name": "Mariam", "email": "mariam@reeducate.ge" },
  { "name": "Lasha", "email": "lashareeducate.ge" },
  { "name": "Ana", "email": "ana@mail.com" }
]
async function users() {
    await fs.writeFile('users.json', JSON.stringify(users2))
    let users = JSON.parse(await fs.readFile('users.json', 'utf-8'))
    const filteredByemail = users.filter(user => user.email.includes('@'))
    console.log(filteredByemail);
    
}

users()