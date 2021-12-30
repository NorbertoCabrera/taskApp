const read = require('./read') //read es la funcion que lee un JSON y devuelve un arreglo
const write = require('./writeJSON')//writeJSON recibe un arreglo y lo escribe como un JSON

let arreglo = read(); //como read devuelve un arreglo la ejecuto "read()" y la igualo a una variable llamada arreglo 
                            




 //esta funcion va a recibir un titulo, va a buscar ese titulo en el arreglo y si lo encuentra 
 //cambiara la descripcion que tiene por la nueva descripcion que le pasamos a la funcion                            
const actualizar = (titulo,descripcion) =>{


                  arreglo.forEach(element => { //con el forEach recorremos cada elemento del arreglo, a los elementos se les llama element pero puede llevar cualquier nombre
       
                     if(element.title==titulo){   //si el titulo del elemento "element.title" es igual a titulo 
                         element.desc=descripcion; // la descripcion de ese mismo elemento sera cambiada por la descripcion nueva "descripcion"
                        
                       console.log("se edito correctamente!") ;
                                               } 

                      
        
                                             });
                    

                                
                                
                     write(arreglo); //el arreglo original ya fue modificado en el if y lo escribimos al JSON con write
                           

           

                                                }




module.exports = actualizar;