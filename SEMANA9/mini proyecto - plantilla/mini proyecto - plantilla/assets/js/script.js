//MINI PROYECTO
//INICIALIZAMOS NUESTRO ARREGLO CON NOMBRES DE MARCAS DE VEHICULOS
const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

let btnPush = document.getElementById("btn_push");

btnPush.onclick = funcionPush;

function funcionPush() {
    cars.push("Lexus");
    mostrarImagenes();
}

//PUSH
let btnPop = document.getElementById("btn_pop");
btnPop.onclick = funcionPop;

function funcionPop() {
    if (cars.Length > 0) {

        cars.pop();
        mostrarImagenes();
    } else {
        alert ("No se puede eliminar más elementos ya que el arreglo está vacío");
    }

}

//SLICE
let btnSlice = document.getElementById("btn_slice");
btnSlice.onclick = funcionSlice;

function funcionSlice() {
    let begin = document.getElementById("begin").value;
let end = document.getElementById("end").value;

//NOS PREGUNTAMOS SI NO SON STRINGS VACÍOS
if(begin !=""&& end !="") {
    cars = cars.slice(begin, end);
    //CARGAMOS LAS IMÁGENES NUEVAMENTE
    mostrarImagenes();
} else {
    alert("Los campos no pueden estar vacíos");
}
}


//Esta función carga las imagenes en el elemento demo
function mostrarImagenes() {
    let text = "";

    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}"
        width="100" />`;
    }

    document.getElementById("demo").innerHTML = text;
}

//MOSTARMOS LAS IMÁGENES AL INICIO
mostrarImagenes();


