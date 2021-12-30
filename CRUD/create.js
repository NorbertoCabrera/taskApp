
const read = require('./read')
const write = require('./writeJSON')

const nuevoArray = read(); //guardo el arreglo que leyo read



//esta funcion agrega un nuevo objeto con el titulo y descripcion que le pasamos:
const agregarNuevaTarea = (titulo,descripcion) =>{

        
        nuevoArray.push({title: titulo, desc: descripcion});//push agrega el objeto al final del arreglo nuevoArray 
        write(nuevoArray);//escribo el nuevo arreglo en el archivo JSON

}


module.exports = agregarNuevaTarea;