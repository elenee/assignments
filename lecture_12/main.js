#! /usr/bin/env node
const fs = require('fs/promises');
const http = require('http');
const {sum, writeFile, readFile} = require("./utils/helper");
const axios = require('axios');
const { Command } = require("commander");
const program = new Command();

// program
//     .command("create")
//     .description("create description")
//     .argument("name")
//     .argument("age")
//     .action(async (name, age) => {
//         let readJSON = await readFile("data.json", true)
//         let lastId = readJSON[readJSON.length - 1]?.id || 0;
//         let newObj = {
//             id: lastId + 1,
//             name,
//             age,
//         }
//         readJSON.push(newObj);
//         await writeFile("data.json", JSON.stringify(readJSON));
//     })

//     program.parse();

// Create a phone number CLI tool where you can:
// * Add a new user with a phone number and name.
// * Delete a user.
// * Show all users.
 program
    .command("create")
    .description("create description")
    .argument("user")
    .argument("phone")
    .action(async (user, phone) => {
        let readJSON = await readFile("data.json", true)
        let lastId = readJSON[readJSON.length - 1]?.id || 0;
        let newObj = {
            id: lastId + 1,
            user,
            phone,
        }
        readJSON.push(newObj);
        await writeFile("data.json", JSON.stringify(readJSON));
    })


program
    .command("delete")
    .description("delete description")
    .argument("id")
    .action(async (id) => {
        let readJSON = await readFile("data.json", true);
        let filtered = readJSON.filter(item => item.id !== parseInt(id));
        await writeFile("data.json", JSON.stringify(filtered));
    });


    program
        .command("show")
        .action(async () => {
            let readJson = await readFile("data.json", true);
            console.log(readJson);
        })

    program
    .command("trasnform")
    .argument("str")
    .option("--uppercase")
    .action((str, option) => {
        console.log(option ? str.toUpperCase() : str);
    })

    program.parse()


// async function fetchAxios(API) {
//     const res = await axios.get(API)
//     console.log(res.data);
    
// }

// fetchAxios("https://jsonplaceholder.typicode.com/users")


// async function main(params) {
//     await parseFile("data.json", true)
// }
// main()
  

// const server = http.createServer((req, res) => {
//     res.write('hello');
//     res.end()
// })

// server.listen(3000);


// async function main() {
//     let dirs = await fs.readdir(__dirname)
//     for(let item of dirs) {
//         let infoStat = await fs.lstat(item);
//         if(infoStat.isDirectory()) {
//             await fs.rmdir(item)
//         }
//     }
// }

// main()

