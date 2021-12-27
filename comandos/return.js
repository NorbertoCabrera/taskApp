const datos = require('../taskData')



const retornaDescripcion = (titulo) => {

       for (let i = 0; i < datos.length; i++) {
           
            if(datos[i].title===titulo){
                return datos[i].desc;
                                        }

                                            } 
           return "no se encontro";

                                        }
//console.log(retornaDescripcion("saltar"));




module.exports = retornaDescripcion;