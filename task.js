
// no se si funciona ya que se cambio el archivo taskData.js a taskData.json preguntar...
const list = require('./comandos/list')
const find = require('./comandos/find')
const edit = require('./comandos/edit')
const filter = require('./comandos/filter')
const retornar = require ('./comandos/return')





switch (process.argv[2]) {
    
    case 'list':
        console.log(list());
        break;
    

    case 'find':
        const nombre = process.argv[3];
        console.log(find(nombre));
        break;
    

    case 'edit':
            const titulo=process.argv[3];
            const descripcion=process.argv[4];
            console.log(edit(titulo,descripcion));
        break;
    

    case 'filter':
        const palabra = process.argv[3];
        console.log(filter(palabra));
        break;
    

    case 'return':
        const titulo2 = process.argv[3];
        console.log(retornar(titulo2));
        break;


    default: console.log("no se encontro la funcion");
        break;

                            }
