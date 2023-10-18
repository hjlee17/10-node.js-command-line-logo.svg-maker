const LogoText = require('../text.js');

describe('LogoText', () => {
  test('should render ABC in white', () => {
    const text = "ABC"
    const color = "white";
    
    const logoText = new LogoText(text, color);
    const expectedLogoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>`

    expect(logoText.render("circle", text, color)).toEqual(expectedLogoText);
  });
});
