const Component = require('../component');

class Square extends Component {
    constructor(color, children) {
        super(children);
        this.color = color;
    }

    render(color) {
        return `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
    }
}

module.exports = Square;