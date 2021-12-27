//importaciones:
const leer = require('./CRUD/read')
const agregarNuevaTarea = require('./CRUD/create')
const actualizar = require('./CRUD/update')
const eliminar = require('./CRUD/delete')


//declaracion de variables de entrada por consola:
let p1 = process.argv[3];
let p2 = process.argv[4];
let tarea = process.argv[2];


//Declaracion e implementacion de funciones:
const list = () => {console.log (leer()); }
const add = (param1,param2)  =>  { agregarNuevaTarea(param1,param2); }
const edit = (param1,param2) =>  {actualizar(param1,param2);}
const delet =(param1)        =>  {eliminar(param1);}





switch (tarea) {
    case 'list': list();
        
        break;

    case 'add':  add(p1,p2);
        
        break;

    case 'edit': edit(p1,p2);
        
        break;

    case 'delete': delet(p1);
        
        break;



    default: console.log("no se encontro la tarea.")
        break;
}
























