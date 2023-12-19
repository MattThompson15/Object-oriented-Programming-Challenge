const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    Test('render method should return SVG with given color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});

describe('Circle', () => {

});

describe('Square', () => {

});