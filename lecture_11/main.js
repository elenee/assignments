const fs = require('fs/promises');
const http = require('http');

// async function main() {
//     await fs.mkdir("docs", {recursive:true});
//     await fs.writeFile('docs/index.js', 'console.log("hello")');
//     // await fs.rename("", "")
// }
// main()


// async function func() {
//     await fs.appendFile('message.txt', ' world')
// }

// func()

// deleting file/folder
// async function func1() {
//     await fs.unlink("message.txt")
//     await fs.rmdir('docs', {recursive:true});
// }
// func1()

async function main() {
    let info = await fs.readdir(__dirname)
    for(let item of info) {
        let infoStat = await fs.lstat(item)
        console.log(item + " " + infoStat.isFile());  
        if(infoStat.isFile() && !item.endsWith('js')) {
            await fs.unlink(item)
        } 
    }
}
// main()

const users = [
    {
        name: 'a',
        age: 'b'
    },
    {
        name: 'a',
        age: 'b'
    },
    {
        name: 'a',
        age: 'b'
    },
]


// const server = http.createServer((req, res) => {
//     if(req.url === '/users') {
//         res.writeHead(200, {"content-type": "application/json"});
//         res.write(JSON.stringify(users));
//         res.end();
//     }
//     console.log(req.url);
//     res.writeHead(200, {"content-type": "text/html"})
//     res.write('hello')
//     res.end()
// });

// server.listen(8080, () => {
//     console.log('server runnign on localhost');
// });






// washlili
// console.log("hello")
// const fs = require('fs/promises');
// const path = require('path')

// async function main() {
//     const pathName = await path.join(__dirname, "..", "message.txt")
//     await fs.writeFile(pathName, "hello")
    
// }

// main()