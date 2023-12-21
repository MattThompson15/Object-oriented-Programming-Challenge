//This file is the entry point of the application
//Importing necessary modules or dependencies
import getUserInput from '../lib/userInput.js';
import { Triangle, Circle, Square } from '../lib/shapes';

//Function to generate the logo based on user input
async function generateLogo() {
    const userInput = await getUserInput();
    let shape;
    switch (userInput.shape) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        default:
            console.log('Invalid shape');
            return;
     }

     shape.setColor(userInput.shapeColor);

     const svgContent = shape.render(userInput.text, userInput.textColor);

     fs.writeFileSync('logo.svg', svgContent);
     console.log('Generated logo.svg');
}
//Invoking the generateLogo function
generateLogo();



