// // /* Metodos de conversion */


// // // let numeroTexto = '22'; // string
// // // console.log(typeof numeroTexto);
// // // let numero = Number(numeroTexto); // number
// // // console.log(typeof numero);

// // // let numeroTexto2 = '-22.22'; // string
// // // console.log(typeof numeroTexto2);
// // // let numero2 = Number(numeroTexto2); // number
// // // console.log(typeof numero2, numero2 + numero);

// // let numeroDecimal = 22.22; // number

// // let convertirAcadena = String(numeroDecimal); // string
// // console.log(typeof convertirAcadena, convertirAcadena);
// // console.log(convertirAcadena)

// // let numero1 = 10; // number
// // let numero2 = 10;

// // let suma = numero1 + numero2; //20
// // console.log(suma);
// // let convertirAString = '10' + '10'; // string
// // console.log(convertirAString);

// // console.log(10 == '10') // true //Igual - igual simple
// // console.log(10 != '10') // false //Diferente - distinto simple

// // console.log(10 === '10') // false //Igual - igual estricto  compara valor y tipo de dato    
// // console.log(10 !== '10') // true //Diferente - distinto estricto

// // console.log(10 >= 12)// false
// // console.log(10 <= 10)// true
// // console.log(10 > 10) // false
// // console.log(10 < 12) // true 

// // //console.log(10 => 10) // false
// // //console.log(10 =< 10) // false

// // //operadores logicos

// // console.log(10 == 10 && 10 == 10) // true

// // console.log(10 == 10 && 10 == 12) // false

// // console.log(10 == 10 || 10 == 12) // true

// // console.log(!(10 == 10)) // false


// // //concatenacion de strings

// // let nombre = 'Pedro';
// // let apellido = 'Perez';

// // let nombreCompleto = 'nombre: ' + nombre + ' y apellido: ' + apellido;

// // console.log(nombre + ' ' + apellido);

// // console.log(nombreCompleto);

// // //template string, iterpolacion de strings

// // let nombreCompleto2 = `nombre: ${nombre} y apellido: ${apellido}`; //backtick

// // console.log(nombreCompleto2);

// let valor1 = 10;
// let valor2 = 20;

// if (valor1 < valor2) {
//     console.log('valor1 es MENOR que valor2');
// } else {
//     if (condicion) {
//         console.log('valor1 es MAYOR que valor2');
//     } else {
//         console.log('valor1 es IGUAL que valor2');
//     }
// }

// let valorX = 10; // let es una variable local

// if (valor1 < valor2) {
//     console.log('valor1 es MENOR que valor2');
// } else if (valor1 > valor2) {
//     console.log('valor1 es MAYOR que valor2');
// } else {
//     console.log('valor1 es IGUAL que valor2');
// }

// console.log(valorX);

// /// If simplificado

// if (valor1 < valor2) {
//     console.log('valor1 es MENOR que valor2');
// }
// let ifOtraManera = (valor1 < valor2) && 'valor1 es MENOR que valor2';
// //--------------------------------------------------------------//

// // if ternario 

// if (valor1 < valor2) {
//     console.log('valor1 es MENOR que valor2');
// } else {
//     console.log('valor1 es MAYOR que valor2');
// }

// let ifTernario = (valor1 < valor2) ? 'valor1 es MENOR que valor2' : 'valor1 es MAYOR que valor2';


// console.log(ifTernario);


// // switch es una estructura de control que nos permite evaluar una expresion y dependiendo del resultado ejecutar un bloque de codigo

// let numero = parseInt(prompt('Ingrese un numero del 1 al 3'));

// switch (numero) {
//     case 'contactos':
//         console.log('Soy un uno');
//         break;
//     case 'index':
//         console.log('Soy un dos');
//         break;
//     case 3.1:
//         console.log('Soy un tres');
//         break;
//     default:
//         console.log('No soy nada');
//         break;
// }


let fruta = String(prompt('Ingrese una fruta')).toLowerCase().trim(); // toUpperCase() convierte a minuscula


switch (fruta) {
    case 'pera':
        document.write('Soy una pera');
        break;
    case 'manzana':
        document.write('Soy una manzana');
        break;
    case 'banana':
        document.write('Soy una banana');
        break;
    default:
        document.write('No soy nada');
        break;
}