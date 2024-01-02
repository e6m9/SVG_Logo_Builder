// import * as fs from 'fs';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'please enter up to 3 characters for yr logo text...'
        }
    ])
    .then((data) => {
        const folderPath = 'logos';
        const baseFileName = 'logo';
        let fileName;

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            fileName = 'logo.svg';
        } else {
            let counter = 2;
            while (fs.existsSync(path.join(folderPath, `${baseFileName}${counter}.svg`))) {
                counter++;
            }
            fileName = `${baseFileName}${counter}.svg`;
        }

        const filePath = path.join(folderPath, fileName);

        if (data.name.length > 3) {
            console.log('Please enter no more than 3 characters for yr logo text...');
        } else {
            const userData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.name}</text></svg>`;

        fs.writeFile(filePath, userData, (err) => {
            if (err) {
                console.error(`Error: ${err}`);
            } else {
                console.log(`Success! File ${fileName} has been written.`);
            }
        });
    }
});
``