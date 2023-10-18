const Component = require('../component');

class Triangle extends Component {
    constructor(color, children) {
        super(children);
        this.color = color;
    }

    render(color) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    }
}

module.exports = Triangle;