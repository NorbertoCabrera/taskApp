const read = require('./read')//read es la funcion que lee un JSON y devuelve un arreglo
const write = require('./writeJSON')//writeJSON recibe un arreglo y lo escribe como un JSON

var arreglo = read();//arreglo guardara el arreglo que leyo read del archivo taskData.json





//esta funcion recibe un titulo ,compara este titulo con los titulos del arreglo y si algun titulo del arreglo coincide
// borrara ese elemento ,es decir tanto el titulo como su descripcion.
const eliminar = (titulo) =>{
    
    let indice=0; //creamos una variable indice y la igualamos a cero . 
    
     for (let index = 0; index < arreglo.length; index++) {//recorremos y preguntamos si el titulo del elemento por el que esta pasando el ciclo for 
                                                        //es igual al titulo que le pasamos a la funcion:

        if(arreglo[index].title==titulo){//si el titulo del elemento coincide con el que le pasamos :
                 indice=index;         //guardamos la posicion de ese elemento en la variable indice 
                                        }
                                                        }
        arreglo.splice(indice,1); //con ese indice sabemos la posicion del elemento que queremos eliminar, se lo pasamos a splice()
                                 // y tambien el numero 1 para decirle q desde esa posicion "indice" queremos eliminar un elemento nada mas. 
                                 //splice devuelve el arreglo sin el elemento que elimino ,por eso arreglo ya queda listo para escribirlo y con el elemento eliminado
       
        write(arreglo); //luego escribimos el arreglo con el elemento ya eliminado 
                 



     // let arreglo2=arreglo.filter(x => x.title!=titulo);  //esta es la funcion mejorada ,hace lo mismo en una sola linea de codigo
                
               // write(arreglo2);
                            }



module.exports = eliminar;