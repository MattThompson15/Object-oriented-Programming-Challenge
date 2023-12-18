const inquirer = require('inquirer');

async function getUserInput() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo',
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select a color for your logo',
            choices: ['red', 'green', 'blue,', 'yellow', 'purple'],
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo',
            choices: ['circle', 'square', 'triangle'],
        },
    ];

    return inquirer.prompt(questions);
}

function createLogo(text, color, shape) {

}

module.exports = {getuserInput, createLogo};