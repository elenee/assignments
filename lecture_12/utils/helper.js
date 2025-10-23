const fs = require('fs/promises');

async function writeFile(filePath, data) {
    const isJson = filePath.endsWith(".json") ? JSON.stringify(data, null, 2) : data
    await fs.writeFile(filePath, isJson, 'utf-8');
    
}

async function readFile(filePath, parsed) {
    try {
        const file = await fs.readFile(filePath, "utf-8");
        return parsed ? JSON.parse(file) : file;
    } catch (error) {
        console.log(error);
    }
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function reverseStr(str) {
    return str.split("").reverse().join(""); 
}


module.exports = {writeFile, readFile, sum, reverseStr};