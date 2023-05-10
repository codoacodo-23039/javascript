window.addEventListener('load', function () {
    let formulario = document.getElementById('form1'); // Selecciono el formulario

    //console.log(formulario);

    formulario.addEventListener('submit', function (event) { // Agrego un evento al formulario
        event.preventDefault(); // Evito que se envie el formulario

        let nombre = document.getElementById('nombre').value; // Obtengo el valor del input nombre

        console.log(nombre);

        let apellido = document.getElementById('apellido').value; // Obtengo el valor del input apellido

        console.log(apellido);


        document.getElementById("resultado").textContent = `Hola ${nombre} ${apellido}`; // Muestro el resultado en el div resultado

        document.getElementById("resultado").style.color = 'green'; // Cambio el color del texto

        document.getElementById("resultado").style.fontSize = '30px'; // Cambio el tamaño del texto

        document.getElementById("resultado").style.fontFamily = 'Arial'; // Cambio la fuente del texto

    })


    let formulario2 = document.getElementById('form2'); // Selecciono el formulario
    formulario2.addEventListener('submit', function (event) { // Agrego un evento al formulario
        event.preventDefault(); // Evito que se envie el formulario

        let numero1 = document.getElementById('numero1').value; // Obtengo el valor del input numero1

        let numero2 = document.getElementById('numero2').value; // Obtengo el valor del input numero2


        if (numero1 == "" || numero2 == "" || isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor ingrese un numero");
        } else {

        let resultado = parseInt(numero1) + parseInt(numero2); // Sumo los valores de los inputs

        document.getElementById("resultado2").textContent = `El resultado de la suma es: ${resultado}`; // Muestro el resultado en el div resultado2
        
        }

    })





});