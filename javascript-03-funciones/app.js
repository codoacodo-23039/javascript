
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let suma = 0;
let resta = 0;
let multiplicar = 0;
let dividir = 0;

suma = sumarDosNumeros(numero1, numero2); //Argumentos
console.log(`la suma de dos numeros: ${suma}`);

resta = restarDosNumeros(numero1, numero2);
console.log(`la resta de dos numeros: ${resta}`);

multiplicar = multiplicarDosNumeros(numero1, numero2);
console.log(`la multiplicacion de dos numeros: ${multiplicar}`);

dividir = dividirDosNumeros(numero1, numero2);
console.log(`la division de dos numeros: ${dividir}`); 