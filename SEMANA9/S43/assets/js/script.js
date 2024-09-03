//MODIFICACIÓN DE ARRAYS

//.map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

// 1 -> DADO EL SIGUIENTE ARRAY DE NÚMEROS, CREAR UN NUEVO ARRAY CON CADA UNO DE LOS NÚMEROS MULTIPLICADOS POR 2
/*
let nums = [1, 2, 3, 4, 5];
console.log(nums);


//con bucles
/*let numsPorDos = [];

for (let num of nums) {
numsPorDos.push(num * 2);
} */

//Usando map
/*
let numsPorDos = nums.map((n) => n *2);
console.log(numsPorDos);
//EL ARREGLO ORIGINAL NO SE MODIFICA
console.log(nums);
*/
/*

console.log()

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"

console.log(3)
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
  */

  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]
  
 /* let palabrasSize = palabras.map((p) =>
    p.length > 7 ? "palabra larga" : "palabra corta");
 */

 /*
 let palabrasSize = palabras.map(
    (p) => `palabra ${p.length > 7 ? "larga" : "corta"}`
 );
 */
 
  
  
  /*
  let palabrasSize = palabras.map((palabra) => {
    if (palabra.length > 7) {
        return "palabra larga";

  } 

  return "palabra corta";
});

console.log(palabrasSize);
*/

//.reduce()
/*
const nums = [1, 2, 3, 4, 5];
console.log(nums);

let suma = nums.reduce((a, b) => a + b, 0);

console.log(suma);

let multiplicación = nums.reduce((a, b) => a * b, 1);
console.log(multiplicación);


// .sort(funcionDeComparación)

let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

puntos.sort();
console.log("Ordenamiento por defecto");
console.log(puntos);

//Ordenamiento numérico estricto
puntos.sort((a, b) => a -b);
console.log("Ordenamiento numérico estricto");
console.log(puntos);

//.reverse()

const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);
//Revertimos el arreglo
arr.reverse();
console.log(arr);

*/

//split()
console.log("split");
const frase = "Hola nuenos días a todas";
console.log(frase);

let palabras = frase.split(" ");
console.log(palabras);

const csv =  "Perú, Argentina, Chile, Colombia";
console.log(csv);

let paises = csv.split(",");
console.log(paises);



//join()
console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);
