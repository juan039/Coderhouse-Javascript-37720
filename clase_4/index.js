// let nombreIngresado = prompt('Ingrese nombre de usuario');
// alert('El nombre ingresado es '+ nombreIngresado);
// nombreIngresado = prompt('Ingrese nombre de usuario');
// alert('El nombre ingresado es '+ nombreIngresado);
// nombreIngresado = prompt('Ingrese nombre de usuario');
// alert('El nombre ingresado es '+ nombreIngresado);

// function solicitarNombre() {
//   let nombreIngresado = prompt('Ingrese nombre de usuario');
//   alert('El nombre ingresado es '+ nombreIngresado);
// }

// for (let i = 0; i < 3; i++) {
//   solicitarNombre();  
// }
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// function conParametros(texto1, texto2) {
//  console.log(texto1 + " " + texto2);
// }

// conParametros("Hola", "Coder")
// conParametros("Cursando", "JS")
// conParametros(23, 53)

// //Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);            
// mostrar(resultado); 


// function sumar(primerNumero, segundoNumero) {
//   return primerNumero + segundoNumero;
// }
// function restar(primerNumero, segundoNumero) {
//   return primerNumero - segundoNumero;
// }
function multiplicar(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

function dividir(primerNumero, segundoNumero) {
  if (segundoNumero !=0) {
    return primerNumero / segundoNumero;
  }
  return 'No puedo procesar la operación'
}

// let operacion = prompt('Elija una opeación:\n1. Suma\n2. Resta\n3. Multiplica\n4. Divide');
// let numero1 = parseFloat(prompt('ingrese un numero para sumar'));
// let numero2 = parseFloat(prompt('ingrese un numero para sumar'));
// let resultado=0;

// switch (operacion) {
//   case "1":
//     resultado = sumar(numero1, numero2);
//     alert(resultado);
//     break;
//   case "2":
//     resultado = restar(numero1, numero2);
//     alert(resultado);
//     break;
//   case "3":
//     resultado = multiplicar(numero1, numero2);
//     alert(resultado);
//     break;
//   case "4":
//     resultado = dividir(numero1, numero2);
//     alert(resultado);
//     break;
//   default:
//     alert(resultado);
//     break;
// }

// alert(resultado);
// let resultado = sumar(numero1, numero2);

// console.log(sumar(1, 2));
// console.log(1 + 2);
// console.log(3);


// x * b /100
// correctas*100/totales
// let preguntasCorrectas = parseInt(prompt('ingrese preguntas correctas'))
// let preguntasTotales = parseInt(prompt('ingrese numerop de preguntas totales'))

// // let resultadoM = multiplicar(preguntasCorrectas, 100)

// // alert(dividir(resultadoM, preguntasTotales))

// function calcularPorcentaje(total, parcial) {
//   let resultadoM = multiplicar(parcial, 100)
//   alert(dividir(resultadoM, total))
// }

// calcularPorcentaje(preguntasTotales, preguntasCorrectas)
// console.log(nombre);
// let nombre = "Juan";

// let saludar = function () { return 'HOLA MUNDO!'}


// let sumar = (a, b) => { return a + b };
// let resta = (a, b) => a - b;

// let saludar = () => 'HOLA MUNDO!';
// console.log(saludar())

// let doble = a => a * 2;

// let calcularPorcentaje = (total, parcial) => {
//   let resultadoM = multiplicar(parcial, 100)
//   alert(dividir(resultadoM, total))
// }

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
// resta(suma(precioProducto, (precioProducto*0.21)), descuento) 
// resta((precioProducto + (precioProducto*0.21)), descuento) 
// ((precioProducto + (precioProducto*0.21)) - descuento) 
console.log(nuevoPrecio)