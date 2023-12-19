const getUserInput = require('.userInput');
const { Triangle, Circle, Square } = require('.shapes');
const fs = require('fs');

async function run() {
    try {
        const userInput = await getUserInput();
        const shape = getShape(userInput.shape, userInput.shapeColor);

        const logoSVG = shape.renderText(userInput.text, userInput.textColor);
        const filename = 'logo.svg';

        fs.writeFileSync(filename, logoSVG);
        console.log(`generated ${filename}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

function getShape(shapeType, color) {
    switch (shapeType) {
        case 'circle':
            return new Circle(color);
        case 'square':
            return new Square(color);
        case 'triangle':
            return new Triangle(color);
        default:
            throw new Error('Invalid shape type');
    }
}

run();