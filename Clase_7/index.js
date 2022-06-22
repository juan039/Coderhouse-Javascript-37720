// function mayorQue(n) {
//   return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)  // (m) => m > 10

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false




// function asignarOperacion(op) {
//   if (op == "sumar") {
//       return (a, b) => a + b
//   } else if (op == "restar") {
//       return (a, b) => a - b
//   }
// }

// let suma = asignarOperacion("sumar") // (a, b) => a + b
// let resta = asignarOperacion("restar") //(a, b) => a - b

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2




// function porCadaUno(arr, funcion) {
//   for (const el of arr) {
//     funcion(el)
//   }
// }

// const numeros= [1, 2, 3, 4,12,34]

// // porCadaUno(numeros, mayorQueDiez)
// // 1
// // 2
// // 3
// // 4


// let total = 0

// function acumular(num) {
//     total += num
// }

// porCadaUno(numeros, acumular)
// // acumular(numeros[0])
// // acumular(numeros[1])
// // acumular(numeros[1])
// console.log(total) // 10


// const duplicado = []

// // porCadaUno(numeros, (el)=> {
// //     duplicado.push(el * 2)
// // })
// porCadaUno(numeros, function(el) {
//     duplicado.push(el * 2)
// })

// console.log(duplicado) // [2, 4, 6, 8]




// const duplicado = []
// const numeros = [1, 2, 3, 4, 5, 6]

// numeros.forEach((elemento, indice)=> {
//   console.log(elemento, indice)
//   duplicado.push(elemento * 2)
// })
// console.log(duplicado)




// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 25000},
//   {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => {
//   return el.nombre === "ReactJS"
// })
// const resultado2 = cursos.find((el) => {
//   return el.nombre === "DW" || el.nombre === "OR"
// })

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2) // undefined





// const cursos = [
//   {nombre: 'Javascript', precio: 13000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ]

// // const resultado = cursos.filter((el) => el.nombre.includes('JS'))
// // const resultado2 = cursos.filter((el) => el.precio < 14000)

// // console.log(resultado)
// // /* [
// //   {nombre: 'ReactJS', precio: 22000},
// //   {nombre: 'Angular', precio: 22000}
// // ] */

// // console.log(resultado2) // []





// // console.log( cursos.some((curso) => curso.nombre == "Desarrollo Web")) 
// // // true
// // console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // // false





// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ]

// console.log(cursos)
// const nombres = cursos.map((el) => el.nombre)
// console.log(nombres)
// // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]





// const actualizado = cursos.map((el) => {
//   return {
//       nombre: el.nombre,
//       precio: el.precio * 1.25
//   }
// })

// console.log(actualizado)
// /* [
//    { nombre: 'Javascript', precio: 18750 },
//    { nombre: 'ReactJS', precio: 27500 },
//    { nombre: 'AngularJS', precio: 27500 },
//    { nombre: 'Desarrollo Web', precio: 20000 }
// ] */



// // let acumulador = 0 
// const numeros = [1, 2, 3, 4, 5, 6]
// const total = numeros.reduce(
//   (acumulador, elemento) => acumulador + elemento, 0
// )

// console.log(total) // 21
// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ]
// const total2 = cursos.reduce(
//   (acumulador, curso) => {
//     return acumulador + curso.precio
//   }, 0
// )
// console.log(total2) // 21




// const miCompra = [
//   { nombre: 'Desarrollo Web', precio: 20000 },
//   { nombre: 'Javascript', precio: 18750 },
//   { nombre: 'ReactJS', precio: 27500 }
// ]

// const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
// console.log(total) // 66250





// const numeros = [ 40, 1, 5, 200 ];
// // const numeros = [ 1, 40, 5, 200 ];
// // const numeros = [ 1, 5, 40, 200 ];
// numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
// numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]


// const items = [
//   { name: 'Pikachu', price: 21 },
//   { name: 'Charmander', price: 37 },
//   { name: 'Pidgey', price: 45 },
//   { name: 'Squirtle', price: 60 }
// ]
// items.sort((a, b) => {
//   if (a.name > b.name) {
//       return 1;
//   }
//   if (a.name < b.name) {
//       return -1;
//   }
//   // a es igual a b
//   return 0;
// })


// class Producto {
//   constructor(id, producto, precio) {
//       this.nombre  = producto.toUpperCase();
//       this.precio  = parseFloat(precio);
//       this.id = id;
//   }
// }

// const productos = [];
// productos.push(new Producto(1,"arroz", 125));
// productos.push(new Producto(2,"fideo", 70));
// productos.push(new Producto(3,"pan", 50));
// productos.push(new Producto(4, "flan", 100));
// productos.push(new Producto(5, "Harina", 100));


// const buscado = productos.find((producto) => producto.id === 3)
// console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

// const existe = productos.some(producto => producto.nombre === "HARINA")
// console.log(existe ) // false

// const baratos = productos.filter(producto => producto.precio <= 100)
// console.log(baratos)
// // [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

// const listaNombres = productos.map(producto => producto.nombre)
// console.log(listaNombres);
// //[“Arroz”, “Fideo”, “Pan”, “Flan”]





// console.log( new Date() )


// console.log(new Date(2020, 1, 15))
// // Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

// const casiNavidad = new Date(2022, 11, 25, 23, 59, 59)
// console.log(casiNavidad)
// // Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


// const casiNavidad = new Date("December 25, 2022 23:59:59")
// console.log(casiNavidad)
// // Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


// const hoy = new Date()

// console.log(hoy.getFullYear())
// console.log(hoy.getMonth())
// console.log(hoy.getDay())


// // const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)




// const navidad = new Date("December 25, 2022")
// const hoy = new Date("December 17, 2022")

// console.log( navidad - hoy ) // 691200000

// const milisegundosPorDia = 86400000

// console.log( (navidad - hoy ) / milisegundosPorDia) // 8




const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos
