//console.log('Hello World!');

var nombreVarible;
let nombreVarible2;
const CONSTANTE = 1;


/*Declaracion de variables*/


if (true) { /*sentencia if*/
    let nombre = "Pedro";

    console.log(nombre);
}

/*declarar variables */

/*camelCase*/

let nombreCompleto = "Pedro Perez";/*ESTA ES LA MEJOR FORMA EN JAVASCRIPT*/

/*snake_case*/

let nombre_completo = "Pedro Perez";

/*PascalCase*/

let NombreCompleto = "Pedro Perez";


let nombre = "Pedro";/* esto es un string*/
let numero = 1;/* esto es un numero*/
let decimal = 100.14;/* esto es un decimal*/
let booleano = true;/* esto es un booleano(true o false)*/
let indefinido = undefined;/* esto es indefinido*/
let nulo = null;/* esto es nulo*/
let objeto = {
    nombre: "Pirulo",
    apellido: "Perez",
}
const IVA = 21;/* esto es una constante*/
const PI = 3.1416;/* esto es una constante*/


console.log(objeto.nombre + " y " + objeto.apellido);


console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof decimal);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof objeto);

/*variables no permitidas*/
/*
let 1nombre = "Pedro"; 
let nombre completo = "Pedro Perez"; 
let nombre-completo = "Pedro Perez"; 
let nombre.completo = "Pedro Perez"; 
let var = "Pedro Perez"; 
let function = "Pedro Perez"; 
let class = "Pedro Perez"; 
const IVA2 = 21;
*/


/*arrays*/


let array = [
    1, 
    2, 
    3, 
    4, 
    5, 
    6, 
    7, 
    8, 
    9, 
    10
];

let array2 = ["Pedro", "Perez", "Pirulo"];

let array3 = [
    1, 
    "Pedro", 
    true, 
    undefined, 
    null, 
    { nombre: "Pirulo", apellido: "Perez" } //indice 5
];

console.log(array[0]);

console.log(array2[0]);

console.log(array3[6]);


let nombreAux = "Lionel";
let apellidoAux = "Messi";

//alert("Nombre y el apellido: " + nombreAux + " " + apellidoAux);


let nombreApellido = prompt("Introduce tu nombre y apellido: ");

alert(nombreApellido);


let isShow = confirm("¿Quieres mostrar el nombre y el apellido?");


alert(isShow); //true o false

document.write("Hola mundo");
