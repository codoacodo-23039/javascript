// //array en javascript

// let array = [1,2,3,4,5,6,7,8,9,10];

// let arrayCadenas = ["uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez"];


// console.log(array); //imprime todo el array

// console.log(array[0]); //imprime el primer elemento del array

// console.log(arrayCadenas[3]); //imprime el cuarto elemento del array

// console.log(array.length) //imprime la longitud del array
// //----------------------//

let arrayPeliculas = ["Batman", "Superman", "Spiderman"];

// console.log(arrayPeliculas);

// arrayPeliculas.push("Ironman"); //agrega un elemento al final del array

// //["Batman","Superman","Spiderman","Ironman"]

// console.log(arrayPeliculas);

// let peliculaAEliminar = arrayPeliculas.pop(); //elimina el ultimo elemento del array
// let pelicula2AEliminar = arrayPeliculas.pop(); //elimina el ultimo elemento del array

// console.log(peliculaAEliminar); //imprime el elemento eliminado
// console.log(pelicula2AEliminar); //imprime el elemento eliminado

// console.log(arrayPeliculas); //imprime el array de peliculas

// let primerElemento = arrayPeliculas.shift(); //elimina el primer elemento del array

// console.log(primerElemento); //imprime el elemento eliminado

// let agregarElemento = arrayPeliculas.unshift("Terminator", "Terminator 2"); //agrega un elemento al principio del array


// console.log(arrayPeliculas); //imprime la longitud del array

// //join

// let stringJoin = arrayPeliculas.join(" Nombre Pelicula: "); //convierte el array en un string separado por el caracter que le pasemos

// console.log(stringJoin);


// //indexOf

// let indice = arrayPeliculas.indexOf("Supermans"); //devuelve el indice del elemento que le pasemos

// console.log(indice);

// //.lastIndexOf()

// let indice2 = arrayPeliculas.lastIndexOf("Terminator"); //devuelve el indice del elemento que le pasemos

// console.log(indice2);

// //includes

// let existe = arrayPeliculas.includes("Terminator"); //devuelve true o false si existe el elemento que le pasemos

// console.log(existe);



arrayPeliculas.push("Terminator 3", "John Wick", "John Wick 2", "John Wick 3", "Terminator 2", "terminator 3");

for (let indice = 0; indice < arrayPeliculas.length; indice++) {
    console.log(`Indice: ${indice} - La Pelicula: ${arrayPeliculas[indice]}`);
}

//map - recorre el array y devuelve un nuevo array con los elementos modificados

let nuevoArray = 
arrayPeliculas.map(
    function (elemento, indice) {
        return elemento.toUpperCase(); //devuelve el elemento en mayusculas
    }
);

console.log(nuevoArray);

console.log(arrayPeliculas);

let filtroArrayPelis = arrayPeliculas.filter(function(pelicula){
    return pelicula.trim().toLowerCase().substring(0,10) == "terminator";
});

console.log(filtroArrayPelis); //devuelve un array con los elementos que cumplan la condicion

//concat

let array1 = [1,2,3,4,5];

let array2 = [6,7,8,9,10];

let array3 = array1.concat(array2); //concatena los dos arrays

console.log(array3);

//sort - ordena el array

let arrayOrdenado = arrayPeliculas.sort(); //ordena el array alfabeticamente

console.log(arrayOrdenado);

let arrayOrdenado2 = arrayOrdenado.reverse(); //ordena el array alfabeticamente de forma inversa

console.log(arrayOrdenado2);

//slice - devuelve un array con los elementos que le pasemos

let arraySlice = arrayPeliculas.slice(0,5); //devuelve un array con los elementos que le pasemos

console.log(arraySlice);


