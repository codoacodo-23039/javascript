function calcularAreaTriangulo(base = 5, altura = 5) {
    return (base * altura) / 2;//scope de la funcion
}

let funcionArrow = (base = 10, altura = 5) => (base * altura) / 2;

let horaActual = () => { //Funcion anonima
    let fecha = new Date(); //Objeto
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    return `${hora}:${minutos}:${segundos}`
}

function horaActual2() {
    let fecha = new Date(); //Objeto
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    return `${hora}:${minutos}:${segundos}`
}

//entorno global de la aplicacion javascript