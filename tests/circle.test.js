const Circle = require('../lib/circle.js');

describe('Circle', () => {
  test('should render a blue circle', () => {

    const color = blue;
    const shape = new Circle([], color);
    const expectedCircle = `<circle cx="150" cy="100" r="80" fill="${color}" />`

    expect(shape.render()).toEqual(expectedCircle);
  });
});
