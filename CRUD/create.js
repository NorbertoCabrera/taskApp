const fs = require('fs')
const read = require('./read')
const write = require('./writeJSON')



const agregarNuevaTarea = (titulo,descripcion) =>{

        const nuevoArray = read();
        nuevoArray.push(objetoNuevo={title: titulo, desc: descripcion});
        write(nuevoArray);

}


module.exports = agregarNuevaTarea;