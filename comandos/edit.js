
const edit = require('../taskData')



const editar = (nuevoTitulo,nuevaDescripcion,viejoTitulo,viejaDescripcion) => {

      objetoEdit={title : nuevoTitulo, desc: nuevaDescripcion };

      return objetoEdit;


}

console.log(editar("atleta olimpico","deportista de elite"));



module.exports = editar;