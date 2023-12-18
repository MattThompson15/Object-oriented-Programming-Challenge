const { getuserInput, createLogo} = require('.lib/user/input');

async function run() {
    const userInput = await getuserInput();
    const logoSVG = createLogo(userInput.text, userInput.color, userInput.shape);
    console.log('Logo:', logoSVG);
}

run()