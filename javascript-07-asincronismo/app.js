let form = document.querySelector('form');

form.addEventListener('submit', function (evento) { // e = evento
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario

    let nombre = document.getElementById('txtNombre').value; // Obtiene el valor del input

    let apellido = document.getElementById('txtApellido').value; // Obtiene el valor del input

    let data = {
        nombre: nombre,
        apellido: apellido
    };

    console.log(data);

    let dataJSON = JSON.stringify(data); // Convierte el objeto a un string JSON

    console.log(dataJSON);

    let resultado = document.getElementById('resultado'); 

    resultado.innerHTML = dataJSON; // Muestra el string JSON en el HTML

});