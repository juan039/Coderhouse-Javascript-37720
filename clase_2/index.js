// let colorIngresado = prompt('Adivina en que color estoy pensado.')

// if (colorIngresado == 'Rojo') {
//   alert('Lo lograste')
// } else if(colorIngresado == 'Azul') {
//   alert('estas muy lejos')
// } else if(colorIngresado == 'Violeta') {
//   alert('estas más cerca')
// } else {
//   alert('Sigue Intentando')
// }

// let edad = 18

// if (edad >= 18) {
//   alert('Salud!!')
// } else {
//   alert('Ve a dormir')
// }
// let nombreUsuario = prompt('Ingrese nombre de usuario');

// if (nombreUsuario != "") {
//   alert('Hola ' + nombreUsuario)
// } else {
//   alert("No ingresaste un nombre de usuario")
// }

// let correo = prompt('Ingrese su correo');
// let contrasena = prompt('Ingrese Contraseña');

// if((correo === 'juan@mail.com') && (contrasena === '123456')) {
//   alert('Bienvenido a la plataforma')
// } else {
//   alert('Correo o contraseña no coinciden')
// }

// let colorIngresado = prompt('Adivina en que color estoy pensado.')
// let condicionColor = (colorIngresado === 'Rojo') || (colorIngresado === 'rojo') || (colorIngresado == 'ROJO')
// if (condicionColor) {
//   alert('Lo lograste')
// }  else {
//   alert('Sigue Intentando')
// }

let nombreIngresado = prompt('Ingrese nombre');
if (
  (nombreIngresado !== '') && ((nombreIngresado === 'EMA') || (nombreIngresado === 'ema'))
) {
  alert('Hola Ema');
} else {
  alert('Error: Ingresar nombre Valido');
}