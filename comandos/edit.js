// no se si funciona ya que se cambio el archivo taskData.js a taskData.json preguntar...
const edit = require('../taskData')



const editar = (nuevoTitulo,nuevaDescripcion) => {

      objetoEdit={title : nuevoTitulo, desc: nuevaDescripcion };

      return objetoEdit;


}

//console.log(editar("atleta olimpico","deportista de elite"));



module.exports = editar;