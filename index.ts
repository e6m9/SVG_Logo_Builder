import * as fs from 'fs';
const inquirer = require('inquirer');
// const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'please enter up to 3 characters for yr logo text...'
        }
    ])
    .then((data) => {
        const userData = '${data.name}.json';

        fs.writeFile(userData, JSON.stringify(data, null, '\t'), (err) =>
            console.log(userData.length > 3 ? err : 'Success!')
            );
    });