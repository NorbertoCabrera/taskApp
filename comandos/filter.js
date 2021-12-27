const filter = require('../taskData')



const filtro = (palabra) => {
    //let contenedor = [];
    for (let i = 0; i < filter.length; i++) {
        if(filter[i].title.includes(palabra)){
            contenedor.push(filter[i].title);
        }
    }
    return contenedor;
}
//console.log(filtro('co'));



module.exports = filtro;