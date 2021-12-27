const read = require('./read')
const write = require('./writeJSON')

let arreglo = read();




const actualizar = (titulo,descripcion) =>{

                 arreglo.forEach(element => { 
       
                     if(element.title==titulo){
                         element.desc=descripcion;
                                               }
        
                                });

                 write(arreglo); 
                                        }




module.exports = actualizar;