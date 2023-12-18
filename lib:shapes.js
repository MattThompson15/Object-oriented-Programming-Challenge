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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />;`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="180" fill="${this.color}" />`;
    }
}