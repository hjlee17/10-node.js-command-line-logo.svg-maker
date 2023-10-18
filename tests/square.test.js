const Square = require('../lib/shapes/square.js');

describe('Square', () => {
  test('should render a green square', () => {

    const color = "green";
    const shape = new Square();
    const expectedSquare = `<rect x="70" y="20" width="160" height="160" fill="green" />`

    expect(shape.render(color)).toEqual(expectedSquare);
  });
});
