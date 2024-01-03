// import * as fs from 'fs';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Shape } = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'please enter up to 3 characters for yr logo text...'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'please enter a color for the text (hex code is acceptable)...'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'please choose one of the following shapes...',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'please enter a color for the shape (hex code is acceptable)...'
        },
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
            return;
        }

        const shape = new Shape(data.shape);
        shape.setColor(data.shapeColor);

        const userData = shape.render() +
            `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text></svg>`;

        fs.writeFile(filePath, userData, (err) => {
            if (err) {
                console.error(`Error: ${err}`);
            } else {
                console.log(`Generated ${fileName}! You would get an infinitely better logo if you paid a graphic designer, though.`);
            }
        });
    }
    );
