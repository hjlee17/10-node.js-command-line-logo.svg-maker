const Triangle = require('../lib/shapes/triangle.js');

describe('Triangle', () => {
  test('should render a red triangle', () => {

    const color = "red";
    const shape = new Triangle();
    const expectedTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`

    expect(shape.render(color)).toEqual(expectedTriangle);
  });
});
