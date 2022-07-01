// let nombreIngresado = prompt('Ingrese un nombre')

// if (nombreIngresado != '' && nombreIngresado.toLowerCase() === 'ema') {
//     alert('Hola Ema!')
// } else if(nombreIngresado != '' && nombreIngresado.toLowerCase() === 'juan') {
//     alert('Hola Juan!')
// } else {
//     alert('Usuario Desconocido')
// }


// let entrada = prompt('Ingrese un dato');

// while (entrada.toUpperCase() != "ESC") {
//     alert(`El usuario ingresó ${entrada}`);
//     entrada = prompt('Ingrese otro dato')
// }

// do {
//     alert(`El usuario ingresó ${entrada}`);
//     entrada = prompt('Ingrese otro dato')
// } while (entrada.toUpperCase() != "ESC");

// for (let i = 0; i <= 4; i++) {
//     alert(i)
// }

// function saludar(nombre) {
//     alert(`Hola ${nombre}`)
// }

const suma = (a, b) => a + b

// const despedierse = nombre  => {
//     alert(`Chau ${nombre}!`)
// }

// const resta = function (a, b) {
//     return a - b;
// }

// saludar('Juan');
// console.log(suma(4,5));
// let resultado = resta(10,20);
// console.log(resultado)
// despedierse('Juan');


// let persona = {
//     nombre: "Juan",
//     presupuesto: 1000,
//     dni: "45678931"
// }

// class Persona {
//     constructor(name, age, address) {
//         this.nombre = name;
//         this.edad = age;
//         this.direccion = address;
//     }

//     saludar() {
//         console.log(`Hola soy ${this.nombre}`)
//     }
// }

// const persona1 = new Persona('Ulises', 30, 'Calle falsa 123')
// persona1.saludar()

// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros[0]);

// const dobles = numeros.map((el) => el * 2);
// const masCien = numeros.map(function (x) {
//     return x + 100
// });

// const dividoDos = (numero) => numero/2;
// const mitades = numeros.map(dividoDos)

// const menoresATres = numeros.filter((numero) => {
//     return numero < 3
// })



// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// let product1JSON = localStorage.getItem('1')
// let product1 = JSON.parse(product1JSON)

// console.log(product1)
// console.log(product1JSON)


let numero1 = document.getElementById('numero1')
let numero2 = document.querySelector('#numero2')
let botonSumar = document.querySelector('#sumar')
let display = document.querySelector('#resultado')

botonSumar.addEventListener('click', (e) => {
    console.log(e)
    let resultado = suma(parseInt(numero1.value), parseInt(numero2.value))
    display.innerHTML = resultado
})