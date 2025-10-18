const fs = require('fs/promises');
const path = require('path')
const http = require('http')

// 1)
async function main() {
    await fs.mkdir('folder1', { recursive: true });
    await fs.mkdir('folder2', { recursive: true });
    await fs.writeFile('text1.txt', 'hello');
    await fs.writeFile('text2.txt', 'hello');
    await fs.writeFile('text3.txt', 'hello');

    let files = await fs.readdir(__dirname);

    for(let item of files) {
        let fullPath = path.join(__dirname, item);
        let infoStat = await fs.lstat(fullPath);

        if(infoStat.isDirectory() && ['folder1', 'folder2'].includes(item)) {
            await fs.rm(fullPath, { recursive: true });
            console.log(item + ' deleted');
        }
    }
}

// main()

// 2)
async function CreateFolder() {
    await fs.mkdir('folder', { recursive: true });

    const mainJS = () => `
        import fs from "fs/promises"

        async function CreateInnerFolder() {
        await fs.mkdir('./inner-folder', { recursive: true });

        await fs.writeFile('./inner-folder/index.js', \`
            const fs = require('fs/promises');
            const path = require('path')
            
            async function main() {
                const pathName = path.join(__dirname, "..", "..", "message.txt")
                await fs.writeFile(pathName, "hello");
                let readFile = await fs.readFile(pathName, 'utf-8')
                let reversed = readFile.split("").reverse().join("");
                await fs.writeFile(pathName, reversed);    
            }
            
            main();
            console.log("working")
        \`);
}
        CreateInnerFolder();
    `;

    await fs.writeFile('./folder/main.js', mainJS());


}
// CreateFolder()

// 3)
async function main1() {
    await fs.mkdir('docs', { recursive: true })
    await fs.writeFile('./docs/text1.txt', 'hello');
    await fs.writeFile('./docs/text2.txt', 'hello');
    await fs.writeFile('./docs/text3.txt', 'hello');
    await fs.writeFile('./docs/script1.js', 'hello');
    await fs.writeFile('./docs/script2.js', 'hello');
    await fs.writeFile('./docs/script3.js', 'hello');

    let files = await fs.readdir('./docs');
    let allText = '';
    for(let item of files) {
        let fullPath = path.join(__dirname, "docs", item);
        let infoStat = await fs.lstat(fullPath);

        if(infoStat.isFile() && item.endsWith('.txt')) {
            const readFile = await fs.readFile(fullPath, 'utf-8')
            allText += readFile + "\n";
        }
    }
    await fs.writeFile('./docs/all.txt', allText);
    console.log(allText);

}
main1()

// 4)
const animals = ["dog", "cat", "lion"];
const cars = ["BMW", "Toyota", "Audi"];
const motorcycle = ["Yamaha", "Honda", "Kawasaki"];

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/animals") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify(animals));
        res.end();
    } else if(url === "/cars") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify(cars));
        res.end();
    } else if(url === "/motorcycle") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify(motorcycle));
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write("Not found")
    }
    res.end()

})

// server.listen(8080, () => {
//     console.log("Server running at localost");
// });



