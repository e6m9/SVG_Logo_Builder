// creates a class to store shapes
class Shape {
    constructor(name, coordinate) {
        this.name = name
        this.coordinate = coordinate
    }
}

// declares the template literals with the coordinates of each shape as consts
const circleCoords = `circle cx="150" cy="100" r="80" `
const triCoords = `polygon points="150, 18 244, 182 56, 182" `
const squareCoords = `rect x="110" y="60" width="80" height="80" `

// declares the new shapes and identifies them with a name and coordinates
const circle = new Shape ('circle', circleCoords);
const triangle = new Shape ('triangle', triCoords);
const square = new Shape ('square', squareCoords);

// exports the Shape class and objects
module.exports = {Shape, circle, triangle, square};