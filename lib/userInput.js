const inquirer = require('inquirer');

async function getUserInput() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo text',
            validate: function (input) {
                return input.length <= 3 ? true : 'Please enter up to three characters';
            }
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Enter a color keyword or hexadecimal number for the text color:',
            type: 'list',
            choices: ['red', 'green', 'blue', 'yellow', 'purple'],
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or hexadecimal number for the shape color:'
        }
    ];

    return inquirer.prompt(questions);
}

module.exports = getUserInput;