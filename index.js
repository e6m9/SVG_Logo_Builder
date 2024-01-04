// imports packages and Shape class
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Shape } = require('./lib/shapes.js');

// define's promptFail as having a default state of false
let promptFail = false;

// if promptFail is true, the application starts the prompts over
if (promptFail) {
    run();
}

// runs the application when it is called in the command line
run();

// run() waits for the data from the inquirer prompts which collect user input
async function run() {
    const data = await inquirer.prompt([
        // accepts 3 characters, incudes a check for more than 3 characters that resends the prompt if the check comes back as true
        {
            type: 'input',
            name: 'name',
            message: 'Please enter up to 3 characters for your logo text...',
            validate: function (input) {
                if (input.length > 3) {
                    console.log('Please enter no more than 3 characters for your logo text.');
                    promptFail = true;
                    return false;
                }
                return true;
            }
        },
        // asks for a color via name or hex code, defaults to white
        // there is currently no check for valid color names or hex codes
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color for the text (hex code or valid color name)...',
            default: 'white'
        },
        // prompt with a list of answers to choose from
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose one of the following shapes...',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color for the shape (hex code or valid color name)...',
            default: 'black'
        },
    ]);

    // upon successful completion, a logos folder is created with a logo.svg file inside it
    const folderPath = 'examples';
    const baseFileName = 'logo';
    let fileName;

    // if the logos folder already exists, another one is not created, if logo.svg already exists, then a file called logo2.svg is created
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

    // uses code from the imported shapes.js to create a new shape using the user inputed data
    const shape = new Shape(data.shape);
    shape.setColor(data.shapeColor);

    // renders the user shape and text 
    const userData = `${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text>
</svg>`;

    // writes the rendered logo to an svg file
    fs.writeFile(filePath, userData, (err) => {
        if (err) {
            console.error(`Error: ${err}`);
        } else {
            console.log(`Generated ${fileName}! You would get an infinitely better logo if you paid a graphic designer, though.`);
        }
    });
}
