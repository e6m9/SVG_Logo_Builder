// creates a class to store shapes
class Shape {
    constructor(name, coordinates, color) {
        this.name = name;
        this.coordinates = coordinates;
        this.color = '';
    }

    // allows the color to be set by user input
    setColor(color) {
        this.color = color;
    }

    // defines the shapes as their coordinates, if the user data does not match circle, 
    // then the app continues to check if it matches triangle.
    // if the user data matches triangle, it stops checking and returns the appropriate coordinates
    render() {
        let coordinates;
        switch (this.name) {
            case 'circle':
                coordinates = 'circle cx="150" cy="100" r="80"';
                break;
            case 'triangle':
                coordinates = 'polygon points="150, 18 244, 182 56, 182"';
                break;
            case 'square':
                coordinates = 'rect  x="60" y="22" width="180" height="200" ';
                break;
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <${coordinates} fill="${this.color}" />`;
    }
}

// exports the Shape class and objects
module.exports = { Shape };