const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { renderSVG } = require('./document');

class CLI {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }

    run() {
        return inquirer
            .prompt([
                // logo characters
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to 3 characters for your logo.',
                    validate: function (input) {
                        return input.length <= 3 ? true : 'Logos can be only up to 3 characters.';
                    },
                },
                // logo color
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter the text color of the logo (keyword or hexademical).',
                    validate: function (input) {
                        return input.length > 0 ? true : 'This input cannot be blank.';
                    },
                },
                // logo shape
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select the shape of the logo:',
                    choices: ['circle', 'triangle', 'square']
                },

                // logo shape color
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter the color of the logo shape (keyword or hexademical).',
                    validate: function (input) {
                        return input.length > 0 ? true : 'This input cannot be blank.';
                    },
                },
            ])
            .then(({ text, textColor, shape, shapeColor}) => {
                this.text = text;
                this.textColor = textColor;
                this.shape = shape;
                this.shapeColor = shapeColor;
                return this.generateSVGLogo();
            })
            .catch((err) => {
            console.log(err);
            console.log('Something went wrong while collecting user input.');
            });
    }
    // function to generate logo and passing inputs
    generateSVGLogo() {
        const userSVGLogo = renderSVG(this.text, this.textColor, this.shape, this.shapeColor);
        return writeFile(join(__dirname, '..', 'output', 'logo.svg'), userSVGLogo)
        .then(() => console.log('Successfully generated logo.svg in output directory!',))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong while generating logo.');
        });
    }
  
}

module.exports = CLI;