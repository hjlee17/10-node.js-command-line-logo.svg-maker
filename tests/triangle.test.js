const Triangle = require('../lib/shapes/triangle.js');

describe('Triangle', () => {
  test('should render a red triangle', () => {

    const color = "red";
    const shape = new Triangle();
    const expectedTriangle = `<triangle cx="150" cy="100" r="80" fill="red" />`

    expect(shape.render(color)).toEqual(expectedTriangle);
  });
});
