const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

//splice(indice, cantidad de elementos a cortar);
personas.splice(1,1, "Manuel", "Juan");
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2, 1);
//personas.splice(personas.indexOf("Dani"), 1);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.splice(0, 0, "Luis");
console.log(personas);

//personas.unshift("Luis");

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Raul");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"

//indexOf()
console.log(personas.indexOf("Maria"));

//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Raul"));
