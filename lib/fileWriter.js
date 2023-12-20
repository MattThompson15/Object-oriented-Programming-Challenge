const fs = require('fs');

function writeToFile(fileName, content) {
    fs.writeFileSync(fileName, content);
    console.log(`Generated ${fileName}`);
}

module.exports = writeToFile;