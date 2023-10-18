const Component = require('./component');

class LogoText extends Component {
    constructor(text, textColor, children) {
        super(children);
        this.text = text;
        this.textColor = textColor;
        
    }
    render(text, textColor) {
        
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}


module.exports = LogoText;