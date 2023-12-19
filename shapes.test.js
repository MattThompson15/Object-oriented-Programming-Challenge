const { Triangle, Circle, Square } = require('.shapes');

describe('Triangle', () => {
    Test('render method should return SVG string with given text and color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.renderText('ABC', 'red')).toEqual(
            '<text x="150" y="100" font-size="20" fill="red" text-anchor="middle" alignment-baseline="middle">ABC</text><polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        
        );
      });
    });

describe('Circle', () => {
    test('rendertext method should return SVG string with given text and color', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.renderText('XYZ', '#FFA500')).toEqual(
            '<text x="150" y="100" font-size="20" fill=#FFA500" text-anchor="middle" alignment-baseline="middle">XYZ</text><circle cx="150" cy="100" r="80" fill="green" />'

        );
      });
    });

describe('Square', () => {
    test('renderText method should return SVG string with given text and color', () => {
        const square = new Square();
        square.setColor('#800080');
        expect(square.renderText('123', 'yellow')).toEqual(
            'text x="150" y="100 font-size="20" fill="yellow" text-anchor="middle" alignment-baseline="middle">123</text><rect width="160" height="160" fill="800080" />'
        );
      });
    });