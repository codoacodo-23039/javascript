//Ciclo repetitivo: while

let contador = 0;


while (contador <= 10) {

    //console.log("Entro por while: contador=" + contador);
    console.log(`Entro por while: contador=${contador}`);
    contador++;
}

//Ciclo repetitivo: do while

do {
    console.log(`Entro por do while: contador=${contador}`);
    contador++;
} while (contador <= 10) 



//Ciclo repetitivo: for
for(let contador = 0; contador <= 10; contador++) {
    console.log(`Entro por for: contador=${contador}`);
}

for(let contador = 10; contador >= 0; contador--) {
    console.log(`Entro por for: contador=${contador}`);
}