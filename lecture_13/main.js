#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const fs = require('fs/promises');
const http = require('http');
const url = require('url')
const queryString = require('querystring')
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"})
    const parsedURL = url.parse(req.url)
    const query = queryString.parse(parsedURL.query);
    console.log(query);

    const readUserData = await fs.readFile("users.json", "utf-8")
    const parsedUserData = JSON.parse(readUserData)    

    const readPostData = await fs.readFile("posts.json", "utf-8");
    const parsedPostData = JSON.parse(readPostData);

    if(parsedURL.pathname === '/') {
        return res.end("just")
    } else if(parsedURL.pathname === "/users") {
        if(query.id) {
            const findUserById = parsedUserData.find(user => user.id === Number(query.id));
            if(!findUserById) {
                return res.end("user not found");
            }
            return res.end(JSON.stringify(findUserById))
        }
        return res.end(JSON.stringify(parsedUserData))
    } else if(parsedURL.pathname === "/posts") {
        let { page = 1, take = 30 } = query;
        if(take > 30) {
            take = 30;
        }
        const result =  parsedPostData.slice((page - 1) * take, take * page);
        return res.end(JSON.stringify(result));
    }
    
})

server.listen(PORT, console.log(`http://localhost:${PORT}`))
    
// program
//     .command("create")
//     .description("create desc")
//     .argument("<name>")
//     .argument("<type>")
//     .argument("<color>")
//     .action(async (name, type, color) => {
//         try {
//             let readData = await fs.readFile("animals.json", "utf-8");
//             if(!readData) {
//                 readData = "[]";
//             }
//             let parsedData = JSON.parse(readData);
//             const animal = {
//                 id: parsedData.length + 1,
//                 name,
//                 type,
//                 color
//             }
//             parsedData.push(animal);
//             await fs.writeFile("animals.json", JSON.stringify(parsedData, null, 2));

//         } catch (error) {
//             console.log(error);
//             return [];
//         }
//     })


//     program.parse()



