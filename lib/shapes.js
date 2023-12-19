class Shape {
    constructor() {
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
    
    }

}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text><rect width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };