const Component = require('../component');

class Circle extends Component {
    constructor(color, children) {
        super(children);
        this.color = color;
    }
    
    render(color) {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    }
}

module.exports = Circle;