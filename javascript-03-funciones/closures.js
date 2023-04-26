 
function saludoPersonalizado(nombre) {
    let saludo = `Hola`;
    function saludar() {
        return `Hola ${nombre}`;
    }
    return saludar();
}