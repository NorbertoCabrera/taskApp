// no se si funciona ya que se cambio el archivo taskData.js a taskData.json preguntar...

const task = require('../taskData')





const lista = () => {
   
    let lista = [];

            for (let i = 0; i < task.length; i++) {
                        lista.push(task[i].title);
                        //lista[i]=task[i].title;
                                                    }

                     return lista;
                   
                    }

//console.log(lista());

module.exports = lista;