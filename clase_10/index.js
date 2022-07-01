// // Método ->  localStorage.setItem(clave, valor)
// // clave = nombre para identificar el elemento 
// // valor = valor/contenido del elemento 
// localStorage.setItem('bienvenida', '¡Hola Coder!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);




// let mensaje =  localStorage.getItem('bienvenida');
// let bandera =  localStorage.getItem('esValido');
// let numero  =  localStorage.getItem('unNumero');

// console.log(mensaje); // ‘¡Hola Coder!’
// console.log(typeof(mensaje)); // ‘¡Hola Coder!’
// console.log(bandera); // ‘true’
// console.log(typeof(bandera)); // ‘true’
// console.log(numero+2);  // ‘20’
// console.log(typeof(numero));  // ‘20’




// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');




// let lista   =  sessionStorage.getItem('seleccionados').split(",");
// let bandera = (sessionStorage.getItem('esValido') == 'true');
// let email   =  sessionStorage.getItem('email');

// console.log(typeof lista);   //object ["1","2","3"];
// console.log(typeof bandera); //boolean;
// console.log(typeof email);   //string;




// // //Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }






// localStorage.setItem('bienvenida', '¡Hola Code!');
// sessionStorage.setItem('esValido', true);

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información



// const producto1 = { id: 2, producto: "Arroz" };
// localStorage.setItem("producto1", producto1); // Se guarda [object Object]



// //Guarda una clave
// localStorage.numeroPrueba = 5;

// //Leer una clave
// alert( localStorage.numeroPrueba ); // 5

// let clave = 'toString';	 //toString método reservado	
// localStorage[clave] = "6"; //No se guarda este dato




// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// localStorage.setItem("producto1Obj", producto1);
// // Se guarda {"id":2,"producto":"Arroz"}

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id)
// producto2.producto = "Papa"
// console.log(producto2)

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
}
//Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// //Iteramos el array con for...of para modificarlos a todos

// // let nombreProducto = prompt('ingrese nombre del producto nuevo')
// // let precioProducto = prompt('ingrese precio del producto nuevo')
// // productos.push(new Producto(nombreProducto, precioProducto));

// let productosJSON = JSON.stringify(productos)
// localStorage.setItem("productos", productosJSON);

// let nombreProducto = prompt('ingrese nombre del producto nuevo')
// let precioProducto = prompt('ingrese precio del producto nuevo')
// productos.push(new Producto(nombreProducto, precioProducto));

// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// let productosJSON = localStorage.getItem('productos')
// const productoObj = JSON.parse(productosJSON)

// let nombreProducto = prompt('ingrese nombre del producto nuevo')
// let precioProducto = prompt('ingrese precio del producto nuevo')
// productoObj.push(new Producto(nombreProducto, precioProducto));

// productosJSON = JSON.stringify(productoObj)
// localStorage.setItem("productos", productosJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2    






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

  








// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//     producto.sumaIva();


  








let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS != 'null') {
    usuario = usuarioEnLS
} else {
    usuario = prompt('Ingrese su nombre de usuario')
    localStorage.setItem('usuario', usuario)
}





// let carrito = []
// let carritoEnLS = JSON.stringify(localStorage.getItem('carrito’))

// // Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
// if (carritoEnLS ) {
//     carrito = carritoEnLS 
// }

// // Función que renderizaría el carrito
// renderCarrito( carrito ) 







