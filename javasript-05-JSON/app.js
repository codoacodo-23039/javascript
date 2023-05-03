//json 

let miJson = {"name":"John","age":31,"city":"New York"}

console.log(miJson);

let objetoLiteral = JSON.stringify(miJson); //convierte un objeto a un string

console.log(objetoLiteral);

let objetoJson = JSON.parse(objetoLiteral); //convierte un string a un objeto

console.log(objetoJson);


