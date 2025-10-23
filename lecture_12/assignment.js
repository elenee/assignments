#!/usr/bin/env node
const fs = require('fs/promises');
const { readFile, writeFile, reverseStr, sum} = require('./utils/helper')
const axios = require('axios');
const { Command } = require("commander");
const program = new Command();

// 1)
async function main() {
    await writeFile("new.json", "hello");
    await writeFile("text.txt", "hello");
    let readJson = await readFile("new.json", true);
    let readtext = await readFile("text.txt", false);
    console.log(readJson);
    console.log(readtext);
}

main()

// 2)
async function fetchAPI1() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data[0];
    } catch (error) {
        console.log(error);
    }
}
async function fetchAPI2() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data[0];
    } catch (error) {
        console.log(error);
    }
}

Promise.all([fetchAPI1(), fetchAPI2()]).then(res => console.log(res)).catch(err => console.log(err));
Promise.race([fetchAPI1(), fetchAPI2()]).then(res => console.log(res)).catch(err => console.log(err));
Promise.allSettled([fetchAPI1(), fetchAPI2()]).then(res => {
    const result = res.reduce((a, b) => {
        if(b.status === 'fulfilled') a.fulfilled++;
        if(b.status === 'rejected') a.rejected++;
        return a;
    }, {fulfilled: 0, rejected: 0});
    console.log(result);
});


// 3)
   program
    .command("add")
    .description("add phone")
    .argument("name")
    .argument("phone")
    .option("--america")
    .action(async (name, phone, option) => {
        try {
            const readJSON = await readFile("phones.json", true);
            const lastId = readJSON[readJSON.length - 1]?.id || 0;

            const newObj = {
                id: lastId + 1,
                name,
                phone: option.america ? `011${phone}` : phone,
            }
            readJSON.push(newObj);
            await writeFile("phones.json", readJSON);
        } catch (error) {
            console.log(error);
            
        }
    });

    program
    .command("delete")
    .description("delete phone")
    .argument("id")
    .action(async (id) => {
        const readJSON = await readFile("phones.json", true);
        const filtered = readJSON.filter(phone => phone.id !== Number(id));
        await writeFile("phones.json", filtered);
    });

    
    program
    .command("find")
    .description("find phone")
    .argument("id")
    .action(async (id) => {
        try {
            const readJSON = await readFile("phones.json", true);
            if(readJSON.length === 0) {
                console.log('no phones found');
                return;
            }
            const phone = readJSON.find(phone => phone.id === Number(id));
            const res = phone ? phone.phone : "not found";
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    });
 
    // program.parse()