//Pido datos
var datos = prompt("Como te llamas?")

//Uso los datos del usuario en un alert
var bienvenida = alert("Bienvenido/a a FARMA WEB " + datos + "!")

//Otro prompt para preguntarle ubicacion y luego condicional
var ubicacion = prompt("De que zona sos?")


if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
}else{
   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
}

// Creo objetos donde 

const cliente = {
    nombre: datos,
    apellido: prompt("Cual es su apellido?"),
    documento: prompt("Cual es su numero de documento?"),
    email: prompt("Ingrese su email"),
    direccion: prompt("Ingrese su direccion"),
    entrega: ubicacion, 
    pago: prompt("Elija metodo de pago: MercadoPago/ debito / efecto"),
    pedido: [ ]
}

console.log(cliente)

//Creo lista de productos de categoria: Maquillaje, marca: Maybelline, producto: labiales

const productoLabialUno = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "20 pioneer",
    precio: 1000,
}

const productoLabialDos = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "65 lover",
    precio: 1000,
}

const productoLabialTres = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "70 Pink",
    precio: 1000,
}

const productoLabialCuatro = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "90 Coral",
    precio: 1000,
}

const productoLabialCinco = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "07 Loyalist",
    precio: 1000,
}

//Junto productos en un array

const labialesMaybelline = [productoLabialUno, productoLabialDos, productoLabialTres, productoLabialCuatro, productoLabialCinco]

//Muestro en consola

console.log(labialesMaybelline)

//Creo objetos de producto categoria: Maquillaje, Marca:Maybelline producto: delineadores

const productoDelineadorUno = {
    categoria: "Maquillaje",
    nombre: "Delineador Uno",
    marca: "Maybelline",
    color: "Negro",
    precio: 800,
}

const productoDelineadorDos = {
    categoria: "Maquillaje",
    nombre: "Delineador 2",
    marca: "Maybelline",
    color: "Marron",
    precio: 700,
}

const productoDelineadorTres = {
    categoria: "Maquillaje",
    nombre: "Delineador 3",
    marca: "Maybelline",
    color: "Azul",
    precio: 600,
}

//Junto productos de delineador en array 

const delineadoresMaybelline = [productoDelineadorUno, productoDelineadorDos, productoDelineadorTres]

//Muestro en un console log el array 

console.log(delineadoresMaybelline)


//Carrito de compras, en un array

const carrito = [ ]

//Agrego productos con push

carrito.push(productoLabialCinco)

carrito.push(productoDelineadorDos)

//con For each recorro el array y lo muestro en consola
carrito.forEach(element => {
    console.log(element);
});
