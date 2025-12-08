const fs = require("fs");

const cleanedFile = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.log("Error to read file");
            return;
        }

        const cleanedData = data.replace(/\s+/g, ' ');

        fs.writeFile(filePath, cleanedData,  'utf-8', (err) => {
            if(err) {
                console.log("Error to write in file");
                return;
            }

            console.log("write content into File successfully");
        })
    })
}

const filePath = "./example.txt";
cleanedFile(filePath);