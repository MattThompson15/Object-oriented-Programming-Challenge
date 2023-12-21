// Base class for different shapes
class Shape {
    //constructor to initialize common properties
    constructor() {
        this.color = 'black';
    }
    //Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    render() {
    
    }

}
//Triangle class
class Triangle extends Shape {
    //method to render the SVG representation on the triangle
    render(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
//Square class
class Square extends Shape {
    render(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text><rect width="160" height="160" fill="${this.color}" />`;
    }
}
// Exporting the triangle, circle, and square class
module.exports = { Triangle, Circle, Square };