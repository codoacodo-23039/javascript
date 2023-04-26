// objeto literal

let unObjeto = {
    nombre: "Juan",
    edad: 30,
    saludar: () => console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)    
}

console.log(typeof unObjeto); // object
console.log(unObjeto); // { nombre: 'Juan' }
console.log(unObjeto.nombre); // Juan
console.log(unObjeto.edad); // 30

//console.log(`Hola soy ${unObjeto.nombre} y tengo ${unObjeto.edad} años`); // template string o interpolacion de variables

console.log(unObjeto.saludar()); // Hola soy Juan y tengo 30 años

//objeto Date
let miFechaActual = new Date(); // objeto de tipo Date

let dia = miFechaActual.getDate(); // obtengo el dia del mes
let mes = miFechaActual.getMonth(); // obtengo el mes del año
let anio = miFechaActual.getFullYear(); // obtengo el año

//objeto String

let miNombre = "Juan"; // string primitivo

let miNombreComoObjetoString = new String("Juan"); // objeto de tipo String

console.log(miNombreComoObjetoString.length) // 4
console.log(miNombreComoObjetoString.toUpperCase()) // JUAN
console.log(miNombreComoObjetoString.toLowerCase()) // juan
console.log(miNombreComoObjetoString.charAt(0)) // J


console.log(miNombre.replace("J", "P")); // Puam

//Objeto math

let numeroAleatorio = Math.random(); // numero aleatorio entre 0 y 1

let numeroAleatorioEntre0y100 = Math.round(Math.random() * 100); // numero aleatorio entre 0 y 100

console.log(`numero aleatorio: ${numeroAleatorio}`);
console.log(`numero aleatorio entre 0 y 100: ${numeroAleatorioEntre0y100}`);

let numeroMax = Math.max(0, 150, 30, 20, -8, -200);

console.log(`numero maximo: ${numeroMax}`); // 150


