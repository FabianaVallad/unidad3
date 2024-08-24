//Iterar un array
/*
let numsImpares = [1, 3, 5, 7, 9];

console.log("Recorrer el array por índices");
//Bucle para iterar un array
for (let i = 0; i < numsImpares.length; i++) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array al revés");
//Bucle para iterar un array
for (let i = numsImpares.length - 1; i >= 0; i--) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array por elementos");
for (let num of numsImpares) {
    console.log(num);
}

console.log("");
let nums = [];
console.log(nums);

//Agregar elementos al array vacío
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

nums[2] = 8693;
console.log(nums);


//ARREGLOS MULTIDIMENSIONALES
let matriz = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(nums);
console.log(nums.length);
console.log("");

console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log(matriz[0][0]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][1]);
console.log("");

*/

//METODOS DE ARRAYS
let nums = [1, 2, 3, 4, 5];
console.log(nums);

//array.push(e) Añade el elemento e al final del array
nums.push(6);
nums.push(7);
nums.push("FABI");
console.log(nums);

//array.pop() Elimina el último elemento del array y lo retorna

let elementoEliminado = nums.pop()
console.log(nums);

//Mostramos el elemento eliminado que guardamos
console.log(elementoEliminado);
//Eliminamos otros elementos
nums.pop();
nums.pop();
console.log(nums);
