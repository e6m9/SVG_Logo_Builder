// imports the shape class
const { Shape } = require('../lib/shapes.js')

// tests the functionality of the code
describe('Shape', () => {
    test('it sets color correctly', () => {
        const triangle = new Shape('triangle', 'polygon points="150, 18 244, 182 56, 182"');
        triangle.setColor('blue');
        expect(triangle.color).toEqual('blue');
    });

    test('it renders correctly', () => {
        const square = new Shape('square', 'rect x="60" y="22" width="180" height="200"');
        square.setColor('green');
        expect(square.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="60" y="22" width="180" height="200" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>');
    });

    test('it should render the correct text', () => {
        const circle = new Shape('circle', 'circle cx="150" cy="100" r="80"');

        circle.setColor('green');
        circle.setTextColor('yellow');
        circle.setText('ash');
        expect(circle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">ash</text></svg>');
    });
})
