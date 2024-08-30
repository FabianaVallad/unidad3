/*
let nums = [1, 2, 3, 4, 5];

console.log(nums);

// arr.push(x) --> agrega el valor x al final del array
nums.push(6);
console.log(nums);
nums.push("JAKDJAKSJA");
console.log(nums);

// arr.pop() --> elimina el último elemento del array
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// arr.unshift(x) --> elimina el valor x al inicio del array
console.log("unshift");
nums.unshift(0);
console.log(nums);

// arr.shift() --> elimina el primer elemento del array
console.log("shift");
nums.shift();
console.log(nums);
*/
/*
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// arr.slice(begin, end)
//Crea una copia del array desde el indice de inicio al fin, sin tomar el último
console.log("slice");
let subnums1 = nums.slice(0, 3);

console.log(subnums1);
console.log(nums);

//EJERCICIO
//Crear el subarray [3, 4, 5, 6] a partir nums


let subnums2 = nums.slice(2, 6);
console.log(subnums2);
*/


let nums = [1, 2, 3, 4, 5, 6, 7, ];
console.log(nums);

//VALOR DE INICIO
console.log("Solo valor de inicio");
let subarr1 = nums.splice(2);
console.log(subarr1);
console.log(nums);

console.log(nums);

console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//AHORA ELIMINAMOS ELEMENTOS
console.log("Eliminando elementos");
let subarr2 = nums.splice(2, 2);
console.log(subarr2);
console.log(nums);

console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//AHORA ELIMINANDO ELEMENTOS
console.log("Agregando elementos");

let subarr3 = nums.splice(2, 4, "a", "b", true, 12312, "hola");
console.log(subarr3);
console.log(nums);

