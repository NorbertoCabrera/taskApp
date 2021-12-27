const fs = require('fs')


const write = (array) => {
    fs.writeFileSync('./taskData.json',JSON.stringify(array,null,2));
}

module.exports = write;