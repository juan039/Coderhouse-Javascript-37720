// // Declaraciòn de array vacío
// const arrayA = [];
// // Declaracion de array con nùmeros
// const arrayB = [1,2];
// // Declaracion de array con strings
// const arrayC = ["C1","C2","C3"];
// // Declaracion de array con booleanos
// const arrayD = [true,false,true,false];
// // Declaracion de array mixto
// const arrayE = [1,false,"C4"];


// const  numeros = [0,9,10,1,2,3,4,5];
// console.log( numeros[0] ) // 1; 
// console.log( numeros[3] ) // 4; 
// let resultado  = numeros[1] + numeros[2] 
// console.log( resultado  ) // 5;



// const numeros = [1, 2, 3, 4, 5];
// for (let index = 0; index < 5; index++) {
//     alert(numeros[index]);
// }


// const miArray = ["marca", 3 ,"palabra",3,4,5,6,7];
// console.log( miArray.length ); //imprime 3


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
// }



// const miArray = ["marca", "otra", "palabra"]
// miArray.push('otro elemento')
// miArray.unshift('otro elemento al inicio')

// console.log(miArray.length) // ⇒ 4
// console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]




// const miArray = ["marca", 3, "palabra"]

// miArray.unshift('otro elemento')

// console.log(miArray)
// //[“otro elemento”, "marca", 3, "palabra"]






// const nombres = ["Luis", "Ana", "Julia", "Juan"]
// // pop !== push
// nombres.pop()
// console.log(nombres) // ["Luis", "Ana", "Julia"]
// // shift !== unshift
// nombres.shift()
// console.log(nombres) // ["Ana", "Julia"]



// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// console.log(nombres)
// nombres.splice(1, 2)

// console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']




// const nombres = ["Luis", "Ana", "Julia", "Juan"]

// console.log( nombres.join() ) 
// // Luis, Ana, Julia

// console.log( nombres.join("/*/") ) 
// alert(nombres.join("<br>"))
// Luis*Ana*Julia



// const perros   = ["Pupy", "Ronnie"]
// const gatos = ["Mishi", "Garfield", "Zuri"]
// const caballos = ["Tiro al Blanco", "Spirit"]
// const mascotas = perros.concat(gatos).concat(caballos)
// const mascotas2 = gatos.concat(perros)
// console.log(mascotas)
// console.log(mascotas2)
// // ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]




// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// // masculinos contiene ['Pedro','Miguel']





// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log( nombres.indexOf('Rita') ) // ⇒ 0
// console.log( nombres.indexOf('Ana') ) // ⇒ 3
// console.log( nombres.indexOf('Pedro') ) // ⇒ 1
// console.log( nombres.indexOf('Julieta') ) // ⇒ -1
// console.log(nombres)
// nombres.splice(nombres.indexOf('Ana'), 1)
// console.log(nombres)


// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// console.log( nombres.includes('Rita') ) // ⇒ true
// console.log( nombres.includes('Miguel') ) // ⇒ true
// console.log( nombres.includes('Julieta') ) // ⇒ false

// if (!nombres.includes('Julieta')) {
//   nombres.push("Julieta")
// }





// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// console.log( nombres ) 
// nombres.reverse()
// console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']





//Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//   let entrada = prompt("Ingresar nombre");
//   listaNombres.push(entrada.toUpperCase());
//   console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));




const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminar = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     } 
// }
// console.log(nombres)
// eliminar('Pedro')

// for (const nombre of nombres) {
//   console.log(nombre)
// }





// const objeto1 = { id: 1, producto: "Arroz" };
// const productos   = [objeto1, { id: 2, producto: "Fideo" }];
// productos.push({ id: 3, producto: "Pan" });




// // const productos = [{ id: 1, producto: "Arroz" },
// //                   { id: 2,  producto: "Fideo" },
// //                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }
// // for (let i= 0; i < numeros.length; i++) {
// //     alert(numeros[i]);
// // }





class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos

let nombreProducto = prompt('ingrese nombre del producto nuevo')
let precioProducto = prompt('ingrese precio del producto nuevo')
productos.push(new Producto(nombreProducto, precioProducto));

for (const producto of productos)
  producto.sumaIva();