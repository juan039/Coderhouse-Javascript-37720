// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = { 
//   nombre: "Homero", 
//   edad: 39, 
//   calle: "Av. Siempreviva 742" ,
//   banco: {
//     numero_de_cuenta: 123456789,
//     nombre: "Banco de la Alegria"
//   }
// }

// // Forma 1 de llamar las propiedades de un objeto
// // console.log(persona1.nombre)
// // console.log(persona1.edad)
// // console.log(persona1.calle)
// // console.log(persona1.banco)

// // Forma 2 de llamar las propiedades de un objeto
// console.log(persona1["nombre"])
// console.log(persona1["edad"])
// console.log(persona1["calle"])
// console.log(persona1.banco.nombre)
// console.log(persona1.banco["numero_de_cuenta"])


// // Forma de escribir los valores de las propiedades.
// persona1["nombre"] = "Marge"
// persona1.edad = 36

// console.log(persona1["nombre"])
// console.log(persona1["edad"])

// persona1.profesion = "Seguridad Planta Nuclear"
// persona1["bebida"] = "Duff"
// console.log(persona1)


// -------------
// Función constuctora
// function Persona(name, age, street, bebida) {
//   this.nombre = name;
//   this.edad 	 = age;
//   this.calle  = street;
//   this.bebida = bebida;
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// console.log(persona1)
// console.log(persona2)

// function Persona(literal) {
//   this.nombre = literal.nombre;
//   this.edad   = literal.edad;
//   this.calle  = literal.calle;
// }
// const persona1 = new Persona({ edad: 39, nombre: "Homero", calle: "Av.Siempreviva 742" });
// console.log(persona1)

// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.inventario = 0;
//   this.aumentarStock = function(cantidad) {this.inventario = this.inventario + cantidad}
// }
// const producto1 = new Producto('Fideos', 300)
// // const producto2 = new Producto('Ñoquis', 350)
// // const producto3 = new Producto('Galleta de chocolate', 120)
// // const producto4 = new Producto('Fernet', 900)

// // console.log(producto1)
// // console.log(producto2)
// // console.log(producto3)
// // console.log(producto4)

// let nombreProducto = prompt('ingrese nombre de producto')
// let precioProducto = parseInt(prompt('ingrese precio de producto.'))
// const producto1 = new Producto(nombreProducto, precioProducto)
// console.log(producto1)


// ------------
// Metodos en objecto JS
let cadena = "HOLA CODER";
// Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
// Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
// Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());


// Metodos Personalizados
// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad   = edad;
//   this.calle  = calle;
//   this.saludar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// persona1.saludar();
// persona2.saludar();


// Operador in y for ...in
// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742",
//   bebida: "Duff",
//   trabajo: {
//     lugar: "Planta Nuclear",
//     rol: "Supervisor"
//   }
// };
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(propiedad, persona1[propiedad]);
// }


// ------------------
// CLASES
// class Persona{
//   constructor(nombre, edad, calle) {
//       this.nombre = nombre;
//       this.edad   = edad;
//       this.calle  = calle;
//   }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

// class Persona{
//   constructor(nombre, edad, calle) {
//       this.nombre = nombre;
//       this.edad   = edad;
//       this.calle  = calle;
//   }

//   hablar(){
//     console.log("HOLA SOY "+ this.nombre);
//   }
//   despedir () {
//     console.log("Chau!")
//   }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// persona1.hablar();



// EJEMPLO APLICADO
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
  descuento (valor) {
      this.precio = this.precio - valor
  }
  vender() {
      this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();