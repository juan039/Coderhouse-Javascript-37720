// console.dir(document);
// console.dir(document.head)
// console.dir(document.body);

// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);


// let paises = document.getElementsByClassName("paises");
// console.log(paises)
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// let test =  document.getElementsByClassName("algo")
// console.log(test)




// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores)
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);





// let paises       = document.getElementsByClassName("paises");
// let contenedores = document.getElementsByTagName("div");

// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//     console.log(div.innerHTML);
// }





// let titulo = document.getElementById("titulo")
// console.log( titulo.innerText ) // “Hola Mundo!”
// // cambio el contenido del elemento
// titulo.innerHTML = "<span>Hola</span> Coder!"
// console.log( titulo.innerText )

// paises[0].innerText = "US"




// let container = document.getElementById("contenedor")
// // cambio el código HTML interno
// container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>"



// let container = document.getElementById("contenedor")
// // cambio el código HTML interno
// container.innerHTML = "<h2>Hola mundo!</h2>"
// // cambio el atributo class
// container.className = "container row red"



// let container = document.getElementById("contenedor")

// // Crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");
// // Insertar HTML interno
// parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// // Añadir el nodo Element como hijo de body
// // document.body.append(parrafo);
// let nodo = document.createElement("div")
// nodo.innerHTML = "Hola soy un div"
// container.append(nodo)
// container.append(parrafo)






// let parrafo = document.getElementById("parrafo1");
// //Elminando el propio elemento
// parrafo.remove();

// let paises = document.getElementsByClassName("paises");
// //Eliminando el primer elemento de clase paises
// paises[0].remove()




// console.log(document.getElementById("nombre").value)
// console.log(document.getElementById("edad").value)
// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value   = 39;





// //Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre = document.getElementById("personas");
// //Array con la información a agregar
// let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE", "MOE"];
// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.append(li);
// }





// let producto = { id: 1,  nombre: "Arroz", precio: 125 };
// let concatenado = "ID: " + producto.id +" - Producto: " + producto.nombre + " $"+producto.precio;
// let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $${producto.precio} Puedo poner más texto ${2 + 2}`;
// //El valor es idéntico pero la construcción de la plantilla es màs sencilla
// console.log(concatenado);
// console.log(plantilla);




// let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
// let contenedor = document.createElement("div");
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h4 class="titulo">ID: ${producto.id}</h4>
//                         <p>Producto: <span>${producto.nombre}</span></p>
//                         <b>$ ${producto.precio}</b>`;
// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);



const productos = [
    { id: 1,  nombre: "Arroz", precio: 125 },
    {  id: 2,  nombre: "Fideo", precio: 70 },
    {  id: 3,  nombre: "Pan"  , precio: 50},
    {  id: 4,  nombre: "Flan" , precio: 100}
];
let container = document.getElementById("contenedor")

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.className = "producto"
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    container.appendChild(contenedor);
}






let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
// parrafo = document.querySelector(".texto")


let paises = document.querySelectorAll(".paises")