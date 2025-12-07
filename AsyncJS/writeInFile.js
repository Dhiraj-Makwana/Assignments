const fs = require("fs").promises;

async function writeToFile(fileName, content) {
    try{
        await fs.writeFile(fileName, content, 'utf-8');
        console.log("content wtite to the file successfully");
    }
    catch(error) {
        console.log("error to write data");
    }
}

writeToFile("./example.txt", "I am a developer");