
        import fs from "fs/promises"

        async function CreateInnerFolder() {
        await fs.mkdir('./inner-folder', { recursive: true });

        await fs.writeFile('./inner-folder/index.js', `
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
        `);
}
        CreateInnerFolder();
    