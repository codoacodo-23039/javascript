
// let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
// let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
// let suma = 0;
// let resta = 0;
// let multiplicar = 0;
// let dividir = 0;

// suma = sumarDosNumeros(numero1, numero2); //Argumentos
// console.log(`la suma de dos numeros: ${suma}`);

// resta = restarDosNumeros(numero1, numero2);
// console.log(`la resta de dos numeros: ${resta}`);

// multiplicar = multiplicarDosNumeros(numero1, numero2);
// console.log(`la multiplicacion de dos numeros: ${multiplicar}`);

// dividir = dividirDosNumeros(numero1, numero2);
// console.log(`la division de dos numeros: ${dividir}`); 

// ARROW FUNCTION

// let area = calcularAreaTriangulo(base = 10, altura = 10);
// console.log(`El area del triangulo es: ${area}`);

// console.log(`El area del triangulo con arrow function ${funcionArrow(base, altura)}`);

// console.log(`La hora actual es: ${horaActual()}`);

// CALLBACK

setTimeout(function () { console.log('Hola Mundo!'); }, 1000) // 10 segundos

setTimeout(function () { console.log(saludar("Juan", "Perez", nombreCompleto)) }, 10000);

// CLOSURES

console.log(saludoPersonalizado("Juan"));