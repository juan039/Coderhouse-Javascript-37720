// i++ === i = i + 1
// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// let numeroIngresado = parseInt(prompt('Ingrese un número'));
// for (let i = 1; i <= 10; i++){
//   let resultado = i * numeroIngresado;
//   console.log(numeroIngresado + " x " + i + " = " + resultado);
//   // console.log(numeroIngresado + " x " + i + " = " + (i * numeroIngresado));
//   // 1 x 1 = 1
// }

// for (let i = 0; i <= 3  ; i++) {
// for (let i = 1; i <= 4  ; i++) {
// for (let i = 0; i < 4  ; i++) {
// for (let i = 1; i < 5  ; i++) {

// for (let i = 1; i <= 4  ; i++) {
//   let nombreIngresado = prompt('Ingresa tu nombre');
//   alert('Turno #' + i +  ' a nombre de ' + nombreIngresado)
// }

// for( let i = 1; i <= 10; i++) {
//   if (i === 5 ) {
//     continue;
//   }
//   console.log(i)
// }

// Calculo Factorial
// let numeroIngresado = parseInt(prompt('Ingrese número para calcular factorial'));
// let resultado = 1;
// // let resultado;
// for (let i = 1; i <= numeroIngresado; i++) {
//   resultado = resultado * i;
// }

// console.log(resultado)


// let entrada = prompt('Ingrese un dato');

// while (entrada != 'ESC') {
//   alert('El usurio ingresó ' + entrada);
//   entrada = prompt('Ingresar otro dato');
// }


// let numero = 0;
// do {
//   numero = prompt('Ingrese un Número')
//   console.log(numero)
// } while (parseInt(numero));

// Calculo Factorial con Do While
// let numeroIngresado = parseInt(prompt('Ingrese número para calcular factorial'));
// let resultado = 1;
// let i = 1
// do {
//   resultado = resultado * i;
//   i++;
// } while (i <= numeroIngresado);
// console.log(resultado)

let entrada = prompt('Ingrese un producto');

// while (entrada != 'ESC') {
  
//   switch (entrada) {
//     case "ANA":
//       alert('Hola Ana');
//       break;
//     case "Juan":
//       alert('Hola Juan')
//       break;
//     default:
//       alert('Quién Sos?')
//       break;
//   }
//   entrada = prompt('Ingrese un nombre');
// }

// if(entrada === 'fernet') {

// }else if(entrada === 'campari') {

// } else {

// }
switch (entrada) {
  case "fernet":
    alert('El precio del Fernet $900');
    break;
  case "campari":
    alert('El precio del Campari $500')
    break;
  default:
    alert('No tengo ese producto')
    break;
}