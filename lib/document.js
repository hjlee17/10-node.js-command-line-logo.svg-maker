const Circle = require('./shapes/circle.js'); 
const Square = require('./shapes/square.js'); 
const Triangle = require('./shapes/triangle.js'); 
const LogoText = require('./text.js')

function renderSVG(text, textColor, shape, shapeColor) {
    let userShapeSelection;
    // select user-selected shape
    switch (shape) {
        case 'circle':
            userShapeSelection = new Circle;
            break;
        case 'square':
            userShapeSelection = new Square;
            break;
        case 'triangle':
            userShapeSelection = new Triangle;
            break;
    }

    // render shape svg content
    const coloredShapeSVG = userShapeSelection.render(shapeColor);

    // render text svg content
    const coloredUserTextSVG = new LogoText().render(shape, text, textColor);


  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${coloredShapeSVG}

  ${coloredUserTextSVG}

</svg>
  `;
}

module.exports = { renderSVG };