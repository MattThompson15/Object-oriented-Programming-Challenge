const getUserInput = require('./userInput.js');
const { Triangle, Circle, Square } = require ('./shapes.js');
const inquirer = require('inquirer');

describe('Triangle', () => {
    test('render method should return SVG string with color', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render('ABC', 'red')).toEqual(
            '<text x="150" y="100" font-size="20" fill="red" text-anchor="middle" alignment-baseline="middle">ABC</text><polygon points="150, 18 244, 182 56, 182" fill="blue" />');
     });
});


describe('Circle', () => {
    test('render method should return SVG string with given text and color', () => {
        const circle = new Circle();
        circle.setColor("green");
        expect(circle.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green" />'
      );
    });
});
    

describe('Square', () => {
    test('render method should return SVG string color', () => {
        const square = new Square();
        square.setColor("#800080");
        expect(square.render('123', 'yellow')).toEqual(
            '<text x="150" y="100" font-size="20" fill="yellow" text-anchor="middle" alignment-baseline="middle">123</text><rect width="160" height="160" fill="#800080" />'
        );
      });
    });