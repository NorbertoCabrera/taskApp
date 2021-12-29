const read = require('./read')
const write = require('./writeJSON')
var arreglo = read();






const eliminar = (titulo) =>{
    let indice=0;
    
    /* for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index].title==titulo){
                 indice=index;
                                        }
                                                        }
        arreglo.splice(indice,1);
        write(arreglo);
                 */
                let arreglo2=arreglo.filter(x => x.title!=titulo);  
                //console.log(arreglo2);
                write(arreglo2);
                            }



module.exports = eliminar;