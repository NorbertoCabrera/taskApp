const fs = require('fs')

//esta funcion recibe un arreglo y lo escribe en forma de JSON
const write = (array) => {
    fs.writeFileSync('./taskData.json',JSON.stringify(array,null,2));//como primer argumento recibe la ruta donde escribira el archivo 
                                                                        // y como segundo parametro la forma de convertir el arreglo a JSON
}

module.exports = write;