// Callbacks

function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}

function saludar(nombre, apellido, callback) {
    return `Hola ${callback(nombre, apellido)}`;
}