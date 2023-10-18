const Circle = require('../shapes/circle.js');

describe('Circle', () => {
  test('should render a blue circle', () => {

    const color = "blue";
    const shape = new Circle();
    const expectedCircle = `<circle cx="150" cy="100" r="80" fill="blue" />`

    expect(shape.render(color)).toEqual(expectedCircle);
  });
});
