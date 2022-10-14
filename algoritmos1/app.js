//alert("Hola mundo desde visual studio code!");
//comentario de una línea


/* esto es un
bloque de
comentario */


//declaración de una variable

let miVariable;



//inicializar variable
const otraVariable = 5;
let nombre = "Raul";
miVariable = "Hola";


console.log(otraVariable);
console.log(miVariable);
console.log(nombre);

//mutacion de valor, reasignación
console.log(miVariable);
miVariable = 5;
console.log(miVariable);

const MI_NOMBRE = "Raul";

//valor primitivo el nombre es en mayúsculas
//const no permite cambiar el valor


//Valores primitivos
//String   - cadena de texto
// palabras, nombres, caracteres

let palabra = "Cualquier \"pal\nabra\" ? ·$%/(/)";
let palabra2 = 'Otra "palabra" mas'; 
console.log(palabra);
console.log(palabra2);


//Number - números
let num = 3;
let num2 = 65.560;
let num3 = -9800;

console.log(num);
console.log(num2);
console.log(num3);
console.log(num, num2, num3);
console.log(num + num2 + num3);
console.log("Este número es " , num );
console.log("Este número es " + num );

console.log("1" + 1);
console.log("1" + "1");

//Boolean  - boleano
//true - false
let verdadero = true;
let falso = false;

console.log(verdadero);
console.log(falso);


//null
//una variable que estamos dejando vacía intencionalmente
let valorNulo = null;
console.log(valorNulo + 1);

const varConst = null;
console.log(varConst);

//undefined
//estado
//
let varUn;
console.log(varUn + 1);

//valores compuestos


//operador typeof  - nos permite conocer el tipo de dato 

let a = 1;
let b = "Hola";
let c = true;

console.log(typeof a);
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(4567));
