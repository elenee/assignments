const fs = require('fs/promises');
const path = require('path')

async function main() {
    const pathName = path.join(__dirname, "..", "..", "message.txt")
    await fs.writeFile(pathName, "hello");
    let readFile = await fs.readFile(pathName, 'utf-8')
    let reversed = readFile.split("").reverse().join("");
    await fs.writeFile(pathName, reversed);    
}

main()