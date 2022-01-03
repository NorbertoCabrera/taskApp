
// no se si funciona ya que se cambio el archivo taskData.js a taskData.json preguntar...
const find = require('../taskData')



const encontrar = (titulo) => {

                for (let i = 0; i < find.length; i++) {
                    
                    if(find[i].title === titulo){
                        return true;
                    
                    }
                   
                }
                        return false;
            }




module.exports = encontrar;