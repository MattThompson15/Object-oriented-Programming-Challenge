class Shape {
    constructor() {
        this.color || 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {

    }

    renderText(text, textColor) {
    
    }

}

class Triangle extends Shape {
    renderText(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${thisColor}" text-anchor="middle" alignment-baseline="middle">${text}</text><polygon points="150, 18 244, 182 56, 182" fill ="${this.color}" />`;
    }
}

class Circle extends Shape {
    renderText(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text><circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(text, textColor) {
        return `<text x="150" y="100" font-size="20" fill="${textColor}" text-anchor="middle alignment-baseline="middle">${text}</text><rect width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };