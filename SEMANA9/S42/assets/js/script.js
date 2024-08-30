/*
let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
console.log(letras);


//.indexOf(elemento, desde)
//Devuelve el índice de la primera ocurrencia de un elemento en un arreglo, desde una posición determinada
//BUsca desde el incio
let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));

//Busca desde el índice especificado
console.log(letras.indexOf("a", 4));

//Buscamos un elemento que no existe en el arreglo
console.log(letras.indexOf("x"));

//.lasIndexOf(elemento, desde)
//Devuelve el índice de la última ocurrencia de un elemnto en un arreglo, desde una posición determinada
console.log("lastIndexOf");

console.log(letras.lastIndexOf("a"));
//Busca desde el índie especificado 
console.log(letras.lastIndexOf("a", 1));

//Includes(elemento, desde)
console.log("includes");
console.log(letras.includes("c"));
console.log(letras.includes("c", 3));
*/

let nums = [34, 65, 23, 45, 96, 143, 4, 56];
console.log(nums);

//.find()
//Devuelve el primer elemento que cumple una condición
let coincidencia = nums.find((num) => num > 60);

//findIndex()
//Devuelve el indice del primer elemento que cumple con una condición
let coincidenciaIndex = nums.findIndex((num) => num > 60);

//.filter()
//Devuelve un arreglo con todos los elementos que cumplan con una condición
let filtrado = nums.filter((num) => num > 60);

console.log(coincidencia);
console.log(coincidenciaIndex);
console.log(filtrado);






