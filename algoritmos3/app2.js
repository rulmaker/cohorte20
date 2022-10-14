//propiedades de arreglos
//length

const frutas = ["🍐", "Manzana", "Guayaba", "Plátano", "Plátano"];
console.log(frutas);

console.log(frutas.length);


//Métodos   - acciones

//push()  - agrega al final

let num = frutas.push("Sandia", "Limón");
console.log(frutas);
console.log(num);

//unshift()  - agrega al inicio
frutas.unshift("Guanábana");
console.log(frutas);

//Metodos para quitar
//pop()  - quita un elemento del final

let elemento = frutas.pop();
console.log(frutas);
console.log(elemento);

//shifht()

let elemento2 = frutas.shift()
console.log(frutas);
console.log(elemento2);

frutas[0];

//indexOf()
console.log(frutas.indexOf('Manzana'));
console.log(frutas.indexOf('Plátano'));

//reverse()
frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);

/* const arreglo = [1,2,5,8,["Alberto", "pedro", "Manuel"], true, false, [["Manzana", "Pera", "Uva", "Naranja", ["Limón", -234, -5]],["Papa", "Calabaza", "Aguacate"],[255, 512, 1024]]];

console.log(arreglo);

arreglo[4].reverse()
console.log(arreglo); */

//sort()
frutas.sort();
console.log(frutas);

const numeros = [4, 567, 2, 4566, 45, 78, 1];

//numeros.sort((a,b) => a -b);

numeros.sort(function order(a,b) {return a - b});//funcion callback

console.log(numeros);



