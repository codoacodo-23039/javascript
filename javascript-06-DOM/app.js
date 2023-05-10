
window.onload = function () {

    let esteEsMiDocumentPrincipal = document;


    //console.log(esteEsMiDocumentPrincipal.getElementById("miCajita").textContent); // No es necesario el # para el id
    //console.log(esteEsMiDocumentPrincipal.getElementsByClassName(".miCajita").textContent); // No es necesario el . para la clase
    //console.log(esteEsMiDocumentPrincipal.querySelector("#miCajita").textContent); // No es necesario el # para el id
    //console.log(esteEsMiDocumentPrincipal.querySelector(".miCajita").textContent); // No es necesario el . para la clase


    console.log(esteEsMiDocumentPrincipal.querySelector(".miCajita1").textContent);

    esteEsMiDocumentPrincipal.querySelector("div.miCajita1").textContent = "<h1>Hola Mundo</h1><h1>Hola Mundo</h1><br><h2>Como estas?</h2>";

    esteEsMiDocumentPrincipal.querySelector("div.miCajita2").innerHTML = "<h1>Hola Mundo</h1><br><h2>Como estas?</h2>";


    esteEsMiDocumentPrincipal.querySelector(".titulo").style.color = 'red';
    esteEsMiDocumentPrincipal.querySelector(".titulo").style.backgroundColor = 'blue';
    esteEsMiDocumentPrincipal.querySelector(".titulo").style.padding = '20px';
    esteEsMiDocumentPrincipal.querySelector(".titulo").style.borderRadius = '20px';


    esteEsMiDocumentPrincipal.querySelector("p").classList.add("parrafoNuevo");


    esteEsMiDocumentPrincipal.querySelector("p").classList.remove("parrafoNuevo");

    esteEsMiDocumentPrincipal.querySelector("p").classList.toggle("parrafoNuevo");

    let unValorBooleano = esteEsMiDocumentPrincipal.querySelector("p").classList.contains("parrafoNuevo");

    console.log(unValorBooleano);


    //eventos


    let miBoton = esteEsMiDocumentPrincipal.getElementById("btn1");

    miBoton.onclick = function () {
        esteEsMiDocumentPrincipal.querySelector(".titulo").style.color = 'green';
    }

    miBoton.onmouseover = function () {
        esteEsMiDocumentPrincipal.querySelector(".titulo").style.color = 'yellow';
    }

    miBoton.onmouseout = function () {
        esteEsMiDocumentPrincipal.querySelector(".titulo").style.color = 'blue';
    }


    let miInput = esteEsMiDocumentPrincipal.getElementById("miInput");

    miInput.onkeydown = function (event) { // Cuando se presiona una tecla
        console.log(event.key);
    }

    miInput.onkeyup = function (event) { // Cuando se suelta una tecla
        console.log(event.key);
    }

    miInput.onkeypress = function (event) { // Cuando se presiona una tecla
        console.log(event.key);
    }
}