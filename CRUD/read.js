const fs = require('fs')

//lee un archivo en formato JSON y lo convierte a string  
const read = () => {return JSON.parse(fs.readFileSync('./taskData.json','utf-8'));}



module.exports = read;