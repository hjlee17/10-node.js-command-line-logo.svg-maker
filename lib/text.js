const Component = require('./component');

class LogoText extends Component {
    constructor(shape, text, textColor, children) {
        super(children);
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    
    }
    render(shape, text, textColor) {
        if (`${shape}` === 'triangle') {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        } else {
            return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        }
    }
}


module.exports = LogoText;