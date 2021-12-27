

const find = require('../taskData')



const encontrar = (titulo) => {

                for (let i = 0; i < find.length; i++) {
                    
                    if(find[i].title === titulo){
                        return true;
                    
                    }
                   
                }
                        return false;
            }

//console.log(encontrar(""));


module.exports = encontrar;