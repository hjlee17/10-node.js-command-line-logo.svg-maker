const inquirer = require('inquirer');
// const { join } = require('path');
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

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
                        // how can i add another validate so a user can't enter 0 characters? somehow incorporate
                        // input.length > 0 ? true : 'Please provide at least 1 character to use for the logo.';
                    },
                },
                // logo color
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter the text color of the logo (keyword or hexademical).',
                    validate: function (input) {
                        return input.length > 0 ? true : 'This input cannot be blank.';
                        // maybe needs a better validation...
                    },
                },
                // logo shape
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select the shape of the logo:',
                    choices: ['circle', 'triangle', 'square']
                    // does this need a validation? requre a selection? can a user proceed without selecting a choice?
                },

                // logo shape color
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter the color of the logo shape (keyword or hexademical).',
                    validate: function (input) {
                        return input.length > 0 ? true : 'This input cannot be blank.';
                        // maybe needs a better validation...
                    },
                },
            ])
            .then(({ text, textColor, shape, shapeColor}) => {
                this.text = text;
                this.textColor = textColor;
                this.shape = shape;
                this.shapeColor = shapeColor;
            })
            .then(() => {
                console.log('input received')
                console.log(this);
            })
            .catch((err) => {
            console.log(err);
            console.log('something went wrong.');
            });
    }
  generateSVGLogo() {

  }
}

module.exports = CLI;