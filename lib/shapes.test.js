const { Shape, circle, triangle, square } = require('../lib/shapes.js')

describe('Shape', () => {
    test('it sets color correctly', () => {
        const triangle = new Shape('triangle', 'polygon points="150, 18 244, 182 56, 182"');
        triangle.setColor('blue');
        expect(triangle.color).toEqual('blue');
    });
})

    test('it renders correctly', () => {
        const square = new Shape('square', 'rect x="110" y="60" width="80" height="80"');
        square.setColor('green');
        expect(square.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">rect x="110" y="60" width="80" height="80" fill="green" /></svg>');
    });

describe('Shape class', () => {
    it('should render a green circle based on the coordinates', () => {
        const circle = new Shape('circle', 'circle cx="150" cy="100" r="80"');

        circle.setColor('green');
        expect(circle.render()).toEqual('<<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> circle cx="150" cy="100" r="80" fill="red" /> </svg>');
    });
})
